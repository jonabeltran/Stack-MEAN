const employeeCtrl = {};
const Employee = require('../models/employee');

employeeCtrl.getEmployees = async(req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.getEmployee = async(req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

employeeCtrl.createEmployee = async(req, res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({
        status: 'Employee saved'
    })
}

employeeCtrl.editEmployee = async(req, res) => { ///
    const { id } = req.params;
    const employee = {
        name: req.params.name,
        position: req.params.position,
        office: req.params.office,
        salary: req.params.salary
    };
    await Employee.findByIdAndUpdate(id, { $set: employee }, { new: true });
    res.json({
        status: 'Employeee update'
    })
}

employeeCtrl.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee delete'
    })
}

module.exports = employeeCtrl;