exports.getWelcome = (req, res, next) => {
    res.render("welcome", {
        title: "Welcome"
    });
};

exports.getAdmin = (req, res, next) => {
    res.render("admin", {
        title: "Admin"
    });
};
