if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
// includes packages
const sitemap = require('express-sitemap')();
const express = require('express');
const passport = require('passport');
const passportConfig = require('./api/passport-config.js');
const methodOverride = require('method-override');
const flash = require('express-flash');
const session = require('express-session');
var path = require('path');
const app = express();

// includes routes
const allRoute = require('./api/routes/all.js');
const authRoute = require('./api/routes/auth.js');
const xml = require('xml');
const { dirname } = require('path');
const Users = require('./api/data').users;
const port = 3000;

passportConfig.init(
    passport,
    (email) => Users.find((user) => user.email == email),
    (id) => Users.find((user) => (user.id = id))
);
app.use(flash());
app.use(
    session({
        secret: 'REtVxemV2Q25',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

// setting
app.set('view engine', 'ejs');
app.set('views', __dirname + '/api/views');
app.set('layout', 'layouts/layout');

// utilities
// app.use(expressLayout)
app.use(express.static('public'));
app.use('/public', express.static(__dirname + '/public'));

// sitemap.generate(app);

app.use('/', allRoute);
app.use('/auth', authRoute(passport));
app.get('/robots.txt', async function (req, res, next) {
    let txt_content = ['User-agent: *', 'Allow: /', 'Sitemap: https://bugfriend-uit.herokuapp.com/sitemap.xml'];
    res.type('text/plain');
    res.send(txt_content.join('\n'));
});
app.get('/sitemap.xml', (req, res) => {
    let xml_content = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset',
        'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
        'xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
        'http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
        '<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->',

        '<url>',
        '<loc>https://bugfriend-uit.herokuapp.com/</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>1.00</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/courses</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/codingPlayground</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/discusses</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/auth/sign-up</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/courses/python</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/posts/detail</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/all-post?page=1</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/portfolio</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.80</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/courses/javascript</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.64</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/codingPlayground/code</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.64</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/discusses/post</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.64</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/posts/lo-trinh-JS</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.75</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/posts/arrayJS</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.75</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/courses/python/lesson1</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.64</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/all-post?page=2</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/all-post?page=3</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/blogs/all-post?page=4</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.90</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/courses/javascript/lesson1</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.51</priority>',
        '</url>',
        ' <url>',
        '<loc>https://bugfriend-uit.herokuapp.com/discusses/new</loc>',
        '<lastmod>2022-05-02T12:06:15+00:00</lastmod>',
        '<changefreq>daily</changefreq>',
        '<priority>0.51</priority>',
        '</url>',

        '</urlset>',
    ];
    res.set('Content-Type', 'text/xml');
    res.send(xml_content.join('\n'));
});

// routes
// listen
app.listen(process.env.PORT || port);
