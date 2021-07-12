const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z]{3,15}$/
    },
    lastName: {
        type: String,
        required: true,
        validate: /^[a-zA-Z]{3,15}$/
    },
    email: {
        type: String,
        validate: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]+$/,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});
const EmployeeModel = mongoose.model('Employee', EmployeeSchema);

class EmployeesModel{
    
    createEmployee (empData,callBack) {
        const empInfo = new EmployeeModel({
            firstName : empData.firstName,
            lastName :  empData.lastName,
            email : empData.email,
            password : empData.password
        });
        empInfo.save({},(error,data)=>{
            error?
                callBack(error,null)
            :
                callBack(null,data)
        })
    }

    getEmployeesInfo(callBack){
        EmployeeModel.find({},(error,data)=>{
            error?
                callBack(error,null)
            :
                callBack(null,data)
        })
    }

    getEmployeeByID(empId,callBack){
        EmployeeModel.findById(empId.employeeId,(error,data)=>{
            error?
                callBack(error,null)
            :
                callBack(null,data)
        })
    }

    updateById(empId,empData,callBack){
        EmployeeModel.findByIdAndUpdate(empId.employeeId,{
            firstName : empData.firstName,
            lastName :  empData.lastName,
            email : empData.email,
            password : empData.password
        },{new : true},(error,data)=>{
            error?
                callBack(error,null)
            :
                callBack(null,data)
        });
    }

    deleteById(empId,callBack){
        EmployeeModel.findByIdAndDelete(empId.employeeId,(error,data)=>{
            error?
                callBack(error,null)
            :
                callBack(null,data)
        })
    }
}
module.exports = new EmployeesModel()