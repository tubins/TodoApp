
var mongoose = require("mongoose"),
    Task = mongoose.model('Task');

exports.list_all_tasks = (req, res) => {
    Task.find({}, (err, tasks) => {
        if (err) res.send(err);
        res.json(tasks);
    });
};

exports.read_a_task = function (req, res) {
    Task.findById(req.params.taskId, function (err, task) {
        if (err)
            res.send(err);
        res.json(task);
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

exports.delete_a_task = (req, res) => {
    Task.remove({ _id: req.params.taskId }, (err, task) => {
        if (err) res.send(err);
        res.json({ message: "Task id successfully deleted - " + task._id });
    });
};
