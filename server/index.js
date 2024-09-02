const express = require('express');
const app = express();
const issueRoutes = require('./routes/issueRoutes');

app.use(express.json());
app.use('/api/issues', issueRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
