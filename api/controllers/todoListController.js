
var mongoose = require("mongoose"),
    Task = mongoose.model('Task');

exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });
};

exports.create_a_task = (req, res) => {
    var new_task = new Task(req.body);
    new_task.save((err, task) => {
        if (err) res.send(err);
        res.json(task);
    });
};

exports.update_a_task = (req, res) => {
    Task.findByIdAndUpdate({ _id: req.params.taskId }, req.body, { new: true }, (err) => {
        if (err) res.send(err);
        res.json(task);
    });
};
