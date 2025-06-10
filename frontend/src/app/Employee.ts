export class Employee {
    constructor(
        public employeeId: number,
        public employeeName: string,
        public joinDate: Date
    ) {}

    // Add static method to create from JSON
    static fromJson(json: any): Employee {
        return new Employee(
            json.employeeId,
            json.employeeName,
            new Date(json.joinDate)
        );
    }
}