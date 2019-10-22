
var mongoose = require("mongoose"),
    Task = mongoose.model('Task');

exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });
};
