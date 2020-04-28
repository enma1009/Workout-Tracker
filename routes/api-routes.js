let Workout = require("../models/workout_model.js");

module.exports = function(app) {
  
    app.post("/submit", ({body}, res) => {
        Workout.create(body)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body)
        .then(data => {
          res.json(data);
        })
        .catch(err => {
          res.json(err);
        });
    });

    app.post("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate({_id: req.params.id}, {day: new Date(), exercises: req.body},
        function(err, result) {
          if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
        });
    });
  
    // Route for logging user out
    // app.get("/logout", function(req, res) {
    //   req.logout();
    //   res.redirect("/landing");
    // });
  
  };