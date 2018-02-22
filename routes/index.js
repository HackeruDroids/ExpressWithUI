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
  //take the parameters from the request->body
  var student = req.body

  //push the student into the array
  students.push(student)

  //respond
  res.render('add', { title: 'Add Student', showModal: true, message: 'הפריט נוסף בהצלחה' })

})

app.get('/edit', (req, res) => {
  var id = req.query.id
  console.log("id", id)
  //console.log({ title: 'Edit Student', data: students[id] })
  res.render('edit', { title: 'Edit Student', data: students[id], id: id })
})



app.post('/edit', (req, res)=>{
  var student = req.body
  var id = student.id
  students[id] = student

  res.redirect('/students')
})



app.get('/', (req, res)=>{res.redirect('/students')})






app.get('/api/students', (req, res) => {
  res.json({ studentsdata: students })
});




module.exports = app;
