/**
 * Problem Statement:
 * In the index.ts file, you are tasked with defining and using Enums in TypeScript:

Define an Enum named Day to represent the days of the week, where Sunday is 0, Monday is 1, and so on, up to Saturday which is 6.

Define another Enum named Status for operational statuses, with string values: Pending as "PENDING", InProgress as "IN_PROGRESS", Completed as "COMPLETED", and Cancelled as "CANCELLED".

Create a variable today of type Day and initialize it as Day.Friday.

Create a variable currentStatus of type Status and initialize it as Status.InProgress.
 */

enum Day {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
};

enum Status {
    Pending = "PENDING",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Cancelled = "CANCELLED",
};

let today:Day = Day.Friday;

let currentStatus = Status.InProgress;

console.log(currentStatus);