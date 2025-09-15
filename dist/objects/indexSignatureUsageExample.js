"use strict";
const peter = {};
const maria = {
    contractSalary: 45000,
};
function totalSalaryCalculator(salaryObject) {
    let total = 0;
    for (const name in salaryObject) {
        total += salaryObject[name];
    }
    return total;
}
;
console.log(totalSalaryCalculator(maria));
console.log(totalSalaryCalculator(peter));
//# sourceMappingURL=indexSignatureUsageExample.js.map