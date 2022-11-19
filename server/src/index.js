require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require("cookie-parser");
const http = require("http");
const server = http.createServer(app);
const { connect } = require("./config/db.js");
const routes = require("./routes");

connect()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

if (process.env.ENV === "development") {
    const morgan = require("morgan");
    app.use(morgan("combined"));
}

// Routes init
routes(app);
server.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});