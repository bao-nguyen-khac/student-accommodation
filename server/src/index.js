require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const cookieParser = require("cookie-parser");
const http = require("http");
const server = http.createServer(app);
const routes = require("./routes");

if (process.env.ENV !== "test") {
    const db = require("./app/models");
    db.sequelize.sync()
        .then(() => {
            console.log("Synced db.");
        })
        .catch((err) => {
            console.log("Failed to sync db: " + err.message);
        });
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


if (process.env.ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("combined"));
}

module.exports = server;

// Routes init
routes(app);
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});