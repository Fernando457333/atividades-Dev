const express = require('express');

const app = express();

app.get('./res', (req, res) => {
    res.send('tudo ok')
})

app.listen(3000);