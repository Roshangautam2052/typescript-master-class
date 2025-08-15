type PermEmployeeSalary ={
    baseSalary?: number,
    yearlyBonus?: number,
};

type ContractualSalary = {
    contractSalary : number,

};

const peter: PermEmployeeSalary = { 
};

const maria: ContractualSalary = {
    contractSalary: 45000,

};


function totalSalaryCalculator(salaryObject: {[key:string]: number}) {
    let total = 0;
    for(const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
};


console.log(totalSalaryCalculator(maria));
console.log(totalSalaryCalculator(peter));
