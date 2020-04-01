var path = require("path");
var db = require("../models");
//ROUTES:

module.exports = function (app) {

    //  loads main page

    app.get("/", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        // res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
        res.render("index", { cars: res });
    });

    app.get("/login", function (req, res) {
        // res.sendFile(path.join(__dirname, "../views/index.handlebars"));
        // res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
        res.render("Login", { cars: res });
    });


    app.get("/api/all", function (req, res) {

        db.Lineups.findAll({}).then(function (data) {
            // var carObject = {
            //     cars: data
            // }
            console.log("data:");
            console.log(data);

            res.json(data);
        });
    });

    app.get("/api/posts/:id", function (req, res) {
        db.Lineups.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // app.get("/api/posts", async function (req, res) {

    //     const modelChosen = await db.Lineups.findOne({ where: { id: req.params.id } }).then(function (dbLineups) {

    //         res.json(dbLineups);
    //     });
    //     console.log(modelChosen);
    // })
}