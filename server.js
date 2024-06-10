const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())

const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index1.html")
})

app.post('/log', (req, res) => {
    console.log(req.get('origin'));
    const { data } = req.body;
    console.log(`Scanned code: ${data}`);
    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});