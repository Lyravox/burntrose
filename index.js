// index.js

const express = require("express");
const app = express();

const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const productsRoutes = require("./routes/productsRoutes");
const blogRoutes = require("./routes/blogRoutes");
const forumRoutes = require("./routes/forumRoutes");

const port = 3000;

// Setup ejs
app.set("view engine", "ejs");

// Set up static files
app.use(express.static("public"));

// Home route
app.use("/", homeRoutes);

// About route
app.use("/", aboutRoutes);

// Products route
app.use("/", productsRoutes);

// Blog route
app.use("/", blogRoutes);

// Forum route
app.use("/", forumRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
