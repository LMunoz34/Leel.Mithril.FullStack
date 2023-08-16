// app.js

var root = document.body


// Define a basic layout
var Layout = {
    view: function(vnode) {
        return m(".layout.container-fluid.w-75", [  // Change .container to .container-fluid for full width
            m("header.mt-3.mb-3", [
                m("h1.text-center.text-primary.mb-3", "Company Name"),
                m(".navbar.navbar-expand-lg.navbar-dark.bg-primary", [
                    m("div.navbar-collapse", [  // Add .justify-content-between
                        m("ul.navbar-nav.d-flex.w-100", [
                            m("li.nav-item.flex-fill.text-center", m(m.route.Link, { href: "/", class: "nav-link text-white" }, "Home")),  // Add .flex-fill and .text-center
                            m("li.nav-item.flex-fill.text-center", m(m.route.Link, { href: "/about", class: "nav-link text-white" }, "About")),
                            m("li.nav-item.flex-fill.text-center", m(m.route.Link, { href: "/services", class: "nav-link text-white" }, "Services")),
                            m("li.nav-item.flex-fill.text-center", m(m.route.Link, { href: "/contact", class: "nav-link text-white" }, "Contact"))
                        ])
                    ])
                ])
            ]),
            m("main.my-4", vnode.children),
            m("footer.text-center.mt-5", "Copyright © 2023 Company Name")
        ]);
    }
};




// Define several routes for the app
var Home = {
    view: function() {
        return m(".home", "Welcome to our corporate website.");
    }
};

var About = {
    view: function() {
        return m(".about", "We are a leading firm in our industry.");
    }
};

var Services = {
    view: function() {
        return m(".services", "We offer a variety of services to cater to your needs.");
    }
};

var Contact = {
    view: function() {
        return m(".contact", "Feel free to reach out to us via our contact page.");
    }
};

// Setup routing
m.route(document.body, "/", {
    "/": { render: function() { return m(Layout, m(Home)); } },
    "/about": { render: function() { return m(Layout, m(About)); } },
    "/services": { render: function() { return m(Layout, m(Services)); } },
    "/contact": { render: function() { return m(Layout, m(Contact)); } }
});

// Set the route mode to Path for cleaner URLs
m.route.prefix("");

