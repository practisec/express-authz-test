// Checks to make sure that a user is logged in.
exports.requireLogin = (req, res, next) => {
    console.log("Executing requireLogin middleware...");
    console.log(`URL: ${req.originalUrl}`);
    console.log("Session:", req.session);
    if (!req.session.user) {
        return res.redirect('login');
    }
    next();
};

// Checks if the user has the proper role.
exports.requireRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log("Executing requireRoles middleware...");
        console.log(`URL: ${req.originalUrl}`);
        console.log("Session:", req.session);
        if (!allowedRoles.includes(req.session.user.role)) {
            return res.status(403).render("403", {
                title: "Forbidden"
            });
        }
        next();
    };
};
