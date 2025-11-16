require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./utils/db');
const Semester = require('./models/Semester');
const Subject = require('./models/Subject');
const Prediction = require('./models/Predictions');

const seed = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    
    // Clear existing data
    await Semester.deleteMany({});
    await Subject.deleteMany({});
    await Prediction.deleteMany({});
    console.log('Cleared old data');

    // Create semester
    const sem = await Semester.create({ number: 1, year: 2024 });
    console.log('Semester created:', sem._id);

    // Create subject
    const subj = await Subject.create({
      name: 'Data Structures',
      code: 'CS101',
      semester: sem._id,
      credits: 3
    });
    console.log('Subject created:', subj._id);

    // Create prediction with sample history
    const pred = await Prediction.create({
      subjectId: subj._id,
      predictedAverage: 78.5,
      passProbability: 0.95,
      history: [
        { score: 75, date: new Date('2024-11-01') },
        { score: 80, date: new Date('2024-11-08') },
        { score: 82, date: new Date('2024-11-15') }
      ]
    });
    console.log('Prediction created:', pred._id);
    console.log('\n Seed complete! Use this subjectId to test:');
    console.log(`curl http://localhost:5000/api/predictions/subject/${subj._id}`);
    
    process.exit(0);
  } catch (err) {
    console.error('Seed error:', err);
    process.exit(1);
  }
};

seed();