const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const session = require("express-session");
const FileStore = require('session-file-store')(session);
const fileStoreOptions = {};

require("dotenv").config();

const router = require("./routes");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const store = new FileStore(fileStoreOptions)

app.use(session({
    secret: 'secret code',
    resave: false,
    saveUninitialized: false,
    store: store
}));

app.use(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
