var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
;
var employe = new Employee();
employe.name = "Prince";
employe.age = 23;
employe.salary = 80000;
console.log(employe);
//Reassigning the salary
employe.salary = 42000;
console.log(employe);
