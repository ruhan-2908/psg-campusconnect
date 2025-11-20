require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db');
const errorHandler = require('./middleware/errorHandler');

require('./models/Student');
require('./models/Semester');
require('./models/Subject');
require('./models/Marks');
require('./models/Predictions');


const predictionsRouter = require('./routes/predictionsRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());


app.use('/api/predictions', predictionsRouter);


app.get('/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.use(errorHandler);


connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect DB:', err);
    process.exit(1);
  });

module.exports = app;