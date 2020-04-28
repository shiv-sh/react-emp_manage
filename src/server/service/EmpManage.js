const empModel = require('../model/employes')

let empService = {};

empService.getAllEmployees = () => {
    return empModel.getEmpList().then(       
        (data) => {
            if(data.length>0) {
                console.log("In model from dynamo dB",data)
                return data
            } else {
                let err = new Error('Database not accessible!!');
                err.status = 400;
                throw err;
            }
        }
    )
}

module.exports = empService