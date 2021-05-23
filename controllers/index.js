const mapBoxToken = process.env.MAPBOX_TOKEN;
const User = require('../models/user')
const Post = require('../models/post')
const passport = require('passport');

module.exports = {
    //Get /
    async landingPage(req,res,next){
        // find all posts to populate into map
        const posts = await Post.find({});
        // render home page and pass in posts
        res.render('index',{posts, mapBoxToken, title: 'Surf Shop - Home'})
    },
    //postRegister method
    async postRegister(req,res,next){
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            image:req.body.image
        })
        await User.register(newUser, req.body.password);
        res.redirect('/');
    },
    //Post /login
    postLogin(req,res,next){
        passport.authenticate('local',{ 
            successRedirect: '/',
            failureRedirect: '/login' 
        })(req,res,next);
    },
    //GEt /logout
    getLogout(req,res,next){
        req.logout();
        res.redirect('/');  
    }
}