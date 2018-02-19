var express = require('express');
var app = express.Router();


var students = [
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
  { firstName: 'Hiday', lastName: 'Eichler', email: 'HidayEichler@gmail.com' },
  { firstName: 'Merav', lastName: 'Samoocha', email: 'Merav.Samoocha@gmail.com' },
]
/* GET home page. */
app.get('/students', (req, res) => {
  res.render('students', { title: 'Students Page', data: students })
});

app.get('/add', (req, res) => {
  res.render('add', { title: 'Add Studnet' })
})

app.post('/add', (req, res) => {
  students.push(req.body)
 res.redirect('/students')
})






app.get('/api/students', (req, res) => {
  res.json({ studentsdata: students })
});



module.exports = app;
