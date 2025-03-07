import express from 'express';

const app = express();
const port = 4300;

app.get('/', (req, res) => {
    res.status(200).json({ status: 200, message: "Testing..." });
})

app.listen(port, () => console.log(`The app rinning on port ${port}`));