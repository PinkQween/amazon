import express from 'express';
import path from 'path';

const app = express();
const api = express.Router();
const port = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});