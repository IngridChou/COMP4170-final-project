const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks: tasks });
});

app.post('/addTask', (req, res) => {
  const task = req.body.task;
  if (task.trim() !== '') {
    tasks.push(task);
  }
  res.redirect('/');
});

app.post('/removeTask', (req, res) => {
  const taskIndex = req.body.taskIndex;
  tasks.splice(taskIndex, 1);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Task List app listening at http://localhost:${port}`);
});
