const express = require('express');
const cors = require('cors');
const sequelize = require('./model/note');

const app = express();
app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

const notesRouter = require('./routes/notes.router')

app.use(cors({
    origin: 'https://localhost:3001', // Allow requests from the React app
    credentials: true // Allow including cookies in CORS requests
}));

app.use('/api', notesRouter);

// Handle other endpoints or invalid requests
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
