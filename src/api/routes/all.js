const express = require('express');
var xml = require('xml');

const router = express.Router();
const expressLayout = require('express-ejs-layouts');

const Posts = require('../data.js').posts;

// index route
router.get('/', expressLayout, (req, res) => {
    res.render('pages/index.ejs', { auth: req.isAuthenticated() });
});

router.get('/home', expressLayout, (req, res) => {
    res.render('pages/home.ejs', { auth: req.isAuthenticated() });
});
//courses router
router.get('/courses/python/lesson1', (req, res) => {
    res.render('pages/course/coursePythonLesson1.ejs', { auth: req.isAuthenticated() });
});

router.get('/courses/javascript/lesson1', (req, res) => {
    res.render('pages/course/courseJavascriptLesson1.ejs', { auth: req.isAuthenticated() });
});

router.get('/courses/python', expressLayout, (req, res) => {
    res.render('pages/course/coursePython.ejs', { auth: req.isAuthenticated() });
});

router.get('/courses/javascript', expressLayout, (req, res) => {
    res.render('pages/course/courseJavascript.ejs', { auth: req.isAuthenticated() });
});

router.get('/courses', expressLayout, (req, res) => {
    res.render('pages/course/coursesList.ejs', { auth: req.isAuthenticated() });
});

// discussion
router.get('/discusses', expressLayout, (req, res) => {
    res.render('pages/discuss/index.ejs', { auth: req.isAuthenticated() });
});
router.get('/discusses/post', expressLayout, (req, res) => {
    res.render('pages/discuss/post.ejs', { auth: req.isAuthenticated() });
});
router.get('/discusses/new', expressLayout, (req, res) => {
    res.render('pages/discuss/new.ejs', { auth: req.isAuthenticated() });
});

//blog router
router.get('/blogs/all-post', expressLayout, (req, res) => {
    let currentPage = parseInt(req.query.page);
    const perPage = 6;
    let totalPost = Posts.length;
    let totalPage = Math.ceil(totalPost / perPage);
    let start = (currentPage - 1) * perPage;
    let end = currentPage * perPage;

    let result = Posts.slice(start, end);

    let pagination = [currentPage, totalPage];

    res.render('pages/blog/allPost.ejs', { result, pagination, auth: req.isAuthenticated() });
});

router.get('/blogs', expressLayout, (req, res) => {
    res.render('pages/blog/index.ejs', { auth: req.isAuthenticated() });
});

// posts route

router.get('/blogs/posts/Frontend-va-Backend-la-gi', expressLayout, (req, res) => {
    res.render('pages/blog/detail.ejs', { auth: req.isAuthenticated() });
});

router.get('/blogs/posts/mang-trong-JS', expressLayout, (req, res) => {
    res.render('pages/blog/arrayJS.ejs', { auth: req.isAuthenticated() });
});

router.get('/blogs/posts/lo-trinh-JS', expressLayout, (req, res) => {
    res.render('pages/blog/lo-trinh-JS.ejs', { auth: req.isAuthenticated() });
});

router.get('/blogs/posts/ung-dung-Python', expressLayout, (req, res) => {
    res.render('pages/blog/ungdungPython.ejs', { auth: req.isAuthenticated() });
});

//coding playground
router.get('/codingPlayground', expressLayout, (req, res) => {
    res.render('pages/codingPlayground/codingPlayground.ejs', { auth: req.isAuthenticated() });
});

router.get('/codingPlayground/code', expressLayout, (req, res) => {
    res.render('pages/codingPlayground/code.ejs', { auth: req.isAuthenticated() });
});

//portfolio
router.get('/portfolio', expressLayout, (req, res) => {
    res.render('pages/portfolio/index.ejs', { auth: req.isAuthenticated() });
});
// search route
router.get('/blogs/search', expressLayout, (req, res) => {
    let result = [];
    if (req.query.searchKey != undefined) {
        let key = req.query.searchKey.toLowerCase();
        let days = Number(req.query.time);

        result = Posts.filter((post) => {
            let checkCategory = req.query.category == 'all' ? true : post.category == req.query.category;
            return post.title.toLowerCase().includes(key) && isSooner(post.date, days) && checkCategory;
        });
    }
    res.render('pages/blog/search.ejs', { result, auth: req.isAuthenticated() });
});

function isSooner(target, days) {
    let now = Date.now();
    return dateDiff(target, now) < days;
}
function dateDiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
module.exports = router;
