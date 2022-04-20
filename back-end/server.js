const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/creative', {
  useNewUrlParser: true
});

const punchSchema = new mongoose.Schema({
  name: String,
  description: String,
  timestampIn: String,
  timestampOut: String
});

const Punch = mongoose.model('Punch', punchSchema);


app.get('/api/punches', async (req, res) => {
  try {
    let punches = await Punch.find();
    res.send(punches);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/clockin', async (req, res) => {
  console.log('Clock-in ' , req.params.id);
  const punch = new Punch({
    name: req.body.name,
    description: req.body.description,
    timestampIn: req.body.timestampIn
  });
  try {
    await punch.save();
    console.log(punch);
    res.send(punch);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Put/edit punch api
app.put('/api/punches/:id', async (req, res) => {
  console.log('Edit/clockout ' , req.params.timestampIn);
  let punch = await Punch.findOne({
    timestampIn: req.params.timestampIn
  });
  punch.timestampOut = req.body.timestampOut;
  try {
    await punch.save();
    res.send(punch);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3100, () => console.log('Server listening on port 3100!'));