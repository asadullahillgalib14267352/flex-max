import { EmployeeDto } from "../../dto/employee.dto";
import EmployeeModel, { IEmployee } from "../../model/employee.model";

class EmployeeAddRepo {
    static employeeAddRepo: EmployeeAddRepo;
    private constructor() {
    }
    
    public static getRepoInstance() {
        if (!this.employeeAddRepo) {
            this.employeeAddRepo = new EmployeeAddRepo();
        }
        return this.employeeAddRepo;
    }

    public async Add(employee :IEmployee) : Promise<any>{
        const employeeModel = new EmployeeModel({
            email: employee.email,
            name: employee.name,
            address: employee.address,
            age: employee.age
        });
        var result= await employeeModel.save();
        return result
    }
    
}

export default EmployeeAddRepo;