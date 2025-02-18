const express = require('express');
const cors = require('cors');
const app = express();
const notesRouter = require('./routes/notesRoute');

app.use(express.json());
app.use(cors());

app.use(notesRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})
