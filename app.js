// Import the Express framework
import express from "express";

// Create an instance of the Express application
const app = express();

// Configure the application to use EJS as the templating engine
app.set("view engine", "ejs"); // Set the template engine to EJS
app.set("views", "views");    // Set the directory for EJS template files

// Define a route for the root URL ("/")
app.get("/", (req, res) => {
  res.render("index"); // Render the "index.ejs" file in the "views" directory
});

// Start the server and listen on port 3000
app.listen(3000, () => console.log(`Server started . . .`)); // Log a message when the server starts

