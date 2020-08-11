var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../models/users');

router.post('/signup',(req,res,next) => {
    User.find({ $or:[
            {email:req.body.email},
            {username:req.body.username}
        ]},(err,user)=>{
        console.log(user)
        if(user.length>0)
        {
            req.flash('error', 'User with same username/email already exists.');
            res.render('register',{
                req,res
            });
        }
        else{
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if (err) {
                        req.flash('error', 'Not able to sign up Please try again.');
                        res.render('register',{
                            req,res
                        });
                    } else {
                        var userBody = {
                            name:req.body.person,
                            email:req.body.mail,
                            username:req.body.username,
                            contact:req.body.mobile,
                            password:hash
                        };
                        User.create(userBody, (err, data) => {
                            if(!err)
                            {
                                req.flash('success', 'Sign Up Successfully.');
                                res.render('register',{
                                    req,res
                                });
                            }
                            else{
                                req.flash('error', 'Not able to sign up Please try again.');
                                res.render('register',{
                                    req,res
                                });
                            }
                        })
                    }
                })
            })
        }
    })
});

router.post('/login',(req,res) => {
    User.findOne({ $or:[
            {email:req.body.user},
            {username:req.body.user}
     ]},(err,user)=>{
        if(err)
        {
            req.flash('error', 'Not able to sign up Please try again.');
                                res.render('register',{
                                    req,res
                                });
        }
        if(!user)
        {
            req.flash('error', `No user with ${req.body.user} exists.`);
                                res.render('register',{
                                    req,res
                                });
        }
        else{
            bcrypt.compare(req.body.password, user.password, function(err, valid) {
                //console.log(valid);
                if (err) {
                    return res.send('Some error occured. Please try again.' + err);
                }
                // valid = true;
                if (valid === true) {
                    req.session.name = user.name;
                    req.session.userid = user._id;
                    req.session.username = user.username;
                    req.session.email = user.email;
                    req.session.phone = user.contact;
                    req.flash('success', `Logged in`);
                    res.render('login',{
                        req,res
                    });
                }
                else{
                        req.flash('error', `Entered Password is Wrong Please Try Again`);
                        res.render('login',{
                            req,res
                        });
                }
            })
        }
    })
})


module.exports = router;