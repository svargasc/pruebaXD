const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use('/public/', express.static('./public'));

const port = 10101;



app.get('/', (req, res) => {
    return res.render('index')
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});