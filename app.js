const express = require('express');
const app = express();

const sequelize = require('./common/database');
const defineUser = require('./common/models/User');

const bookRoutes = require('./routes/bookRoutes');
const User = defineUser(sequelize);


sequelize.sync();

app.use(express.json());
app.use('/api', bookRoutes);

app.get('/status', (req, res) => {
  res.json({
    status: 'Running successfully!',
    timestamp: new Date().toISOString()
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));