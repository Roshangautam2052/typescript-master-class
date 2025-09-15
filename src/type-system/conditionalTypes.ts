type CustomDates = Date;

type CustomsString = string;

// ternary operator 
type TrueString = CustomsString extends string ? true : false;
// assigning a type based on ternary operator 
type ConditionalNumber = CustomDates extends Date ? number: string;

type DateAssignment = CustomDates extends Date ? Date : undefined;





