const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(bodyParser());

uids = [
    '56816538294',
    '255160553809045',
    '198412993439962'
]
app.get('/',(req,res)=>{
    res.send('Hello World');
});
app.post('/',(req,res)=>{
    var uid = req.body.uid;
    var state = false;
    if (uids.indexOf(uid) > 0 || uids.indexOf(uid) == 0) {
        state = true;
    } else {
        state = false;
    }
    res.send(state)
})


app.listen(process.env.PORT ||'80',()=>{
    console.log('Server Runing')
})
