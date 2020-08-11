var express = require('express');

var router = express.Router()

router.get('/',(req,res)=>{
    res.render('home',{
        req,res
    });
});

router.get('/home',(req,res)=>{
    res.render('home',{
        req,res
    });
});

router.get('/travel',(req,res)=>{
    res.render('travel',{
        req,res
    });
});

router.get('/gallery',(req,res)=>{
    res.render('gallery',{
        req,res
    });
});

router.get('/acc',(req,res)=>{
    res.render('acc',{
        req,res
    });
});

router.get('/acco1',(req,res)=>{
    res.render('acco1',{
        req,res
    });
});

router.get('/acco2',(req,res)=>{
    res.render('acco2',{
        req,res
    });
});

router.get('/guide',(req,res)=>{
    res.render('guide',{
        req,res
    });
});

router.get('/register',(req,res)=>{
    res.render('register',{
        req,res
    });
});

router.get('/login',(req,res)=>{
    res.render('login',{
        req,res
    });
});

router.get('/contact',(req,res)=>{
    res.render('contact',{
        req,res
    });
});

router.get('/jaipurr',(req,res)=>{
    res.render('jaipurr',{
        req,res
    });
});

router.get('/chambaa',(req,res)=>{
    res.render('chambaa',{
        req,res
    });
});

router.get('/kangraa',(req,res)=>{
    res.render('kangraa',{
        req,res
    });
});

router.get('/gangotrii',(req,res)=>{
    res.render('gangotrii',{
        req,res
    });
});

router.get('/nanitall',(req,res)=>{
    res.render('nanitall',{
        req,res
    });
});


router.get('/solann',(req,res)=>{
    res.render('solann',{
        req,res
    });
});

module.exports = router;