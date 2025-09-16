class Hospital {
    name:string;
    address:string;
    numberOfEmployees:number;

    constructor(name:string, address:string, employeeNumbers:number){
        this.name = name;
        this.address = address;
        this.numberOfEmployees = employeeNumbers;
    }

    public getNumberOfEmployees():number{
        return this.numberOfEmployees;
    }
}

class MaternityHospital extends Hospital {
    numberofMidwives:number;
    departments:string[];

    constructor(name:string, address:string, numberOfEmployees:number, numberOfMidwives:number, departments:string[]){
        super(name,address, numberOfEmployees)
        this.numberofMidwives = numberOfMidwives;
        this.departments = departments;
    }

    public override getNumberOfEmployees():number {
        return this.numberofMidwives;
    }
    
}

const newCrossHospital:MaternityHospital = new MaternityHospital("MaternityHospital", 
    "Wolverhampton",
    100,
    12,
    ["Gyno", "Delivery-suite"]
)