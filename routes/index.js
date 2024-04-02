const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controller/indexController');

// all paths relative to index

// GET / render index 
router.get('/', indexCtrl.index)
// GET /categories/drinks
router.get('/categories/drinks/:category', indexCtrl.showCategory)
// GET Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google', 
    {
        scope: ['profile', 'email']
    }
));
// GET Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
    'google', 
    {
        successRedirect: '/',
        failureRedirect: '/'
    }
));
// GET logout route
router.get('/logout', function(req, res) {
    req.logout(function() {
        res.redirect('/');
    });
})


module.exports = router;
