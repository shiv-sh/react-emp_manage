const express = require('express');
const routing = express.Router();
const dbModule = require('../model/data');
const emp = require('../model/employes');
const empService = require('../service/EmpManage');
// var AWS = require('aws-sdk');
// require('dotenv').config();
// const accessKey = process.env.API_ACCESS_KEY;
// const secretKey = process.env.API_SECRET_KEY;


// "accessKeyId" : "AKIA2CWDWS7MLJMT2P7K", "secretAccessKey" : "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"


// let awsConfig = {
//     "region" : "us-east-2",
//     "endpoint" : "http://dynamodb.us-east-2.amazonaws.com",
//     "accessKeyId" : accessKey, "secretAccessKey" : secretKey
// };
// AWS.config.update(awsConfig);

// let docClient = new AWS.DynamoDB.DocumentClient();




//routing for Login - EXPECTS NAME AND PASSWORD!!
// routing.post('/login',  (req, res, next) => {
//     let username = req.body.username;
//     let password = req.body.password;
//     console.log("request for log in received!!")
//     let result = dbModule.LoginUser(username, password)
//     if (result)
//         res.json({ "message": "User successfully Logged in with user name: " + result });
//     else {
//         let err = new Error();
//         err.status = 401;
//         err.message = "Unauthorized access!!"
//         next(err);
//     }
// });


routing.get('/allEmployees', (req,res, next) => {
    empService.getAllEmployees().then(
        (data) => {
            if(data) {
                res.send(data)
                res.end()
            }
        }
    ).catch(err => next(err))
})

// routing.get('appUsers', (req,res,next) => {

// })

// routing.get('adminUsers', (req,res,next) => {

// })

// routing.post('addEmployee', (req,res,next) => {

// })

//---------------------------------------------------------------------------------------


//Routing for Transactions tab
routing.get('/myTransactions/:username',(req, res, next) => {
    let username = req.params.username;
    console.log("username",username)
    let tlist = dbModule.retrieveUsersTransactions(username)
    if (tlist && tlist.length>0)
        res.json(tlist);
    else {
        let err = new Error();
        err.status = 404;
        err.message = "No transaction details found!!"
        next(err);
    }

})


module.exports = routing;