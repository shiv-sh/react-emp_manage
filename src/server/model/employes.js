// const employeeSchema = require('../schemas');

// const mongoose = require('mongoose');

// const empSchema = mongoose.Schema(employeeSchema,{ _id : false });


// module.exports = mongoose.model('EmployeeManagement',empSchema);

var AWS = require('aws-sdk');
require('dotenv').config();
const accessKey = process.env.API_ACCESS_KEY;
const secretKey = process.env.API_SECRET_KEY;
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": accessKey, "secretAccessKey": secretKey
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

// change as per table name, Item = to be posted to dB
var params = {
    TableName: "employee_list",
    Key: {
        "empID": "1212"
    }
};


let dbOperations = {};
var retVal;

dbOperations.getEmpList = () => {
    
    return dbRead(params).then(data => {console.log("ppp",data); return data});

    async function dbRead(params) {
        let promise = docClient.scan(params).promise();
        let result = await promise;
        let data = result.Items;
        return data;
    }
    // console.log("dssa",retVal)
    // return data12
    // return retVal


    // docClient.scan(params, onScan);
    // function onScan(err, data) {
    //     if (err) {
    //         retVal = err
    //         console.log("ERROR!!");
    //     } else {
    //         retVal = data.Items
    //         console.log("Scan succeeded.", retVal);
    //         return retVal
    //     }
    // }
    // console.log("PPPP", retVal)
    // return retVal
    // docClient.get(params, function(err,data) {
    //     if(err) {
    //         return err;
    //     } else {
    //         console.log("From dynamo dB",data.Item);
    //         retVal = data;
    //     }
    // })
    // console.log("JJ",list)
    // return list; 
}
module.exports = dbOperations