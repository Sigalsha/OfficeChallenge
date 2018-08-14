// write your code here to make the tests pass

class Document {
    constructor(EmployeeName) {
        this.EmployeeName = EmployeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {
       let document = new Document(this.name);
       for (let i = 0; i < 10; i++) {
            office.documents.push(document);
       }
    }    
}


class Manager extends Employee {
    // constructor(name, employees) {
    constructor(name) {
        super(name);
        // this.name = name;
        this.employees = [];
    }

    hireEmployee(name) {
        let employee = new Employee(name); 
        this.employees.push(employee);
    }

    askEmployeesToWork(office) {
        for (let index in this.employees) {
            this.employees[index].work(office);
        }
    }
}


class Cleaner extends Employee{
    constructor(name) {
        super(name);
    }

    clean() {
        console.log("Clean");
    }
}


class Office{
    // constructor(documents, managers, cleaners) {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireManager(name) {
        let manager = new Manager(name); 
        this.managers.push(manager);
    }

    hireCleaner(name) {
        let cleaner = new Cleaner(name);
        this.cleaners.push(cleaner);
    }

    startWorkDay() {
        for (let index in this.managers) {
            this.managers[index].askEmployeesToWork(this);
        }
        
        for (let index in this.cleaners) {
            this.cleaners[index].clean();
        }
    }
}
// var office = new Office();
// console.log(office.documents);
// console.log(office.managers);
// console.log(office.cleaners);
// office.hireManager("elevation");
// console.log(office.managers[0].name);
// office.hireCleaner("bob");
// console.log(office.cleaners[0].name);

// let office = new Office();
// let employee = new Employee("elevation");
// employee.work(office);
// console.log(office.documents.length);
// console.log(office.documents[0].EmployeeName);
// console.log(office.documents[9].EmployeeName);

let office = new Office();
office.hireManager("elevation");
office.hireManager("elevation");
office.managers[0].hireEmployee("Hadas");
office.managers[1].hireEmployee("Brandon");
office.managers[1].hireEmployee("Omer");
office.startWorkDay();
console.log(office.documents.length);

console.log(office.documents[0].EmployeeName);
console.log(office.documents[9].EmployeeName);
console.log(office.documents[10].EmployeeName);
console.log(office.documents[19].EmployeeName);
console.log(office.documents[20].EmployeeName);
console.log(office.documents[29].EmployeeName);

console.log(office.documents[15].EmployeeName);