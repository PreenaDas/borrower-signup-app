const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/borrowersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json());

//  SCHEMA + MODEL
const borrowerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  residenceType: String,
  monthlyIncome: Number,
  previousLoan: Boolean,
  maritalStatus: String,
  numberOfDependents: Number,
  city: String,
  state: String,
}, { timestamps: true });

const Borrower = mongoose.model('Borrower', borrowerSchema);

//  POST API
app.post('/api/borrowers', async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res.status(201).json({ message: 'Borrower saved successfully ✅' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save borrower ❌' });
  }
});

//  Root route
app.get('/', (req, res) => res.send('API Running'));

app.listen(5000, () => console.log('Server started on port 5000 🚀'));

