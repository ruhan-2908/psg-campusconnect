require('dotenv').config();
const express = require('express');
const connectDB = require('./utils/db');
const errorHandler = require('./middleware/errorHandler');

require('./models/Student');
require('./models/Semester');
require('./models/Subject');
require('./models/Predictions');
const predictionsRouter = require('./routes/predictionsRoutes');

const app = express();
app.use(express.json());
app.use('/api/predictions', predictionsRouter);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
connectDB(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect DB', err);
    process.exit(1);
  });