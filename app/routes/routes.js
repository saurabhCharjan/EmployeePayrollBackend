/**********************************************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm server.js
                   
 * Purpose      : define end points for our application 
 *
 * @description  :modules need to be required before execution of this file  
 *
 * @file        : routes/routes.js
 * @overview    : defines routes for login and registration
 * @module      :  use HTTP methods to send request to server 
 * @author      : Saurabh
 * @version     : 1.0
 * @since       : 8-07-2021
 **********************************************************************************************************/

module.exports = (app) => {
    const empPayroll = require('../controllers/employee');
    const user = require('../controllers/user')
    const swaggerUi = require('swagger-ui-express');
    const swaggerDocument = require('../../swagger/swagger.json');
    const helper =  require('../middlewares/helper')

    app.use('/api-docs', swaggerUi.serve);
    app.get('/api-docs', swaggerUi.setup(swaggerDocument));

    //Create a new User
    app.post('/registerUser', user.registerUser);

    //User Login
    app.post('/login',user.loginUser);

    // Create a new Employee
    app.post('/empPayroll', helper.authenticateToken,empPayroll.createEmployee);

    // Retrieve all Empployee
    app.get('/getEmpPayroll', helper.authenticateToken ,empPayroll.getEmployeesInfo);

    // Retrieve a single Employee with employeeId
    app.get('/getEmpPayrollByID/:employeeId', helper.authenticateToken ,empPayroll.getEmployeeByID);

    // Update a Employee with employeeId
    app.put('/updateEmpPayroll/:employeeId', helper.authenticateToken ,empPayroll.updateById);

    // Delete a Employee with employeeId
    app.delete('/deleteEmpPayroll/:employeeId', helper.authenticateToken ,empPayroll.deleteById);
}