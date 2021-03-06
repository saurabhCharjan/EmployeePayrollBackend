/**********************************************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm server.js
 *
 * Purpose      : user input request validation for employee
 *
 * @description  :joi package need to be installed & required before execution of this file 
 *
 * @file        : middlewares/employeeValidation.js
 * @overview    : validates the employee data send as request to server 
 * @module      : validates input request against pre-defined object schema since users can send anything 
 * @author      : Saurabh
 * @version     : 1.0
 * @since       : 11-07-2021
 **********************************************************************************************************/
 const joi = require('joi');

 const employeeSchema = joi.object({
     firstName: joi.string().min(3).max(15).required(),
     lastName: joi.string().min(3).max(15).required(),
     email: joi.string().email().required(),
     department: joi.string().required(),
     salary:joi.number().required()
 })
 module.exports = {employeeSchema}