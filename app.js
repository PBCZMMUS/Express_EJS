import express from "express";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome",
    message: "Hello from EJS!",
    people: ["Kyaw Zaw", "Khin Swe", "Maung Hla"],
  });
});

app.listen(3000, () => console.log(`Server started . . .`));
