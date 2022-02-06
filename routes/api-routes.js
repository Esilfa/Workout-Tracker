const db = require("../models");
const router = require("express").Router();

module.exports = function (app) {
    app.get('/api/workouts', (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
            .catch(err => {
                res.status(400).json(err);
            });
    });
    router.put('/api/workouts/:id', (req, res) => {
        Workout.findByIdAndUpdate(
            req.params.id,
            { $push: { exercises: req.body } },
            { new: true }
        )
            .then(workout => res.json(workout))
            .catch(err => res.json(err));
    });

    router.post('/api/workouts', (req, res) => {
        workout.create({
            day: DataTransfer.now()
        })
            .then(newWorkout => {
                console.log('time to workout ', newWorkout);
                res.json(newWorkout);
            })
            .catch(err => res.json(err));
    })
}
module.exports = router;