const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Shajaat:<testing786>@cluster0.suur4fu.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const UserSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  dob: Date,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();

    res.status(200).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.listen(3000, () => console.log('Server started on port 3000'));