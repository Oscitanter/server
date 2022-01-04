const mongoose = require('mongoose')


connect("mongodb://localhost/users", {useNewUrlParser: true});
connection
    .once('open', () => console.log('Connected'))
    .on('error', () => {
        console.log("Your Error", error);
    });
