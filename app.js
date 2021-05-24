const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const studentJson = require("./student.json");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/views`));
app.set("view engine", "ejs");
app.listen(2136, () => {
    console.log("server is running");
});

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/all", (req, res) => {
    res.sendFile(`${__dirname}/student.json`);
});

app.post("/add", (req, res) => {
    let { id, name } = req.body;
    if (id === "" || name === "") {
        res.send("Please enter valid value");
    } else {
        studentJson[id] = name;
        let data = JSON.stringify(studentJson, "", "\t");
        fs.writeFile("student.json", data, function (err) {
            if (err) {
                console.log(err);
            }
        });
        res.send("Successfully Updated");
    }
});

app.post("/delete", (req, res) => {
    let { id } = req.body;
    var data = fs.readFileSync("student.json");
    var temp = JSON.parse(data);
    if (temp[id] === undefined) {
        res.send("Student NotFounded");
    } else {
        delete temp[id];
        let result = JSON.stringify(temp, "", "\t");
        fs.writeFile("student.json", result, (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.send("Successfully Deleted");
    }
});
