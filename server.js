const express = require('express');
const port = 4000;

//initiate
const app = express();


//get requests
// app.get('/', (req, res) =>{
//     res.send('welcome to Home page');
// });

//express.static runs the static file 
app.use(express.static('app'));


app.get('/api', (req, res) =>{
    res.json({
        things:[
            {
                name : 'Ravish Rana',
                member: 'Anish Rana'
            },
             {
                name : 'Ankit Mishra',
                member: 'Anish Rana'
            },
             {
                name : 'Vishvas Arya',
                member: 'Anish Rana'
            }
        ]
    })
});

//listen port
app.listen(port, () =>{
    console.log('its running');
});