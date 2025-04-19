exports.getLogin = (req, res, next) => {
    if (req.session.user) {
        res.redirect('/welcome');
    } else {
        res.render("login", {
            title: "Login"
        });
    }
};

const users = [
    {
        email: "abc@gmail.com",
        password: "password",
        role: "user"
    },
    {
        email: "admin@gmail.com",
        password: "password",
        role: "admin"
    }
];

exports.postLogin = (req, res, next) => {
    const user = users.find(u => u.email === req.body.email && u.password === req.body.password);
    if (user) {
        req.session.user = user;
        res.redirect('/welcome');
    }
    else{
        res.redirect('/');
    }
};

exports.getLogout = (req, res, next) => {
    res.clearCookie('connect.sid');
    req.session.destroy(() => {
        res.redirect("/");
    });
};
