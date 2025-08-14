const STATUS_LOADING = "loading";

// By using these enums we don't have to declare constants
enum Direction {
    Up, // This will have value of 0 and consecutively increases to other incremental identifier
    Down, // These properties cannot be changed and are readonly property
    Left,
    Right
};

console.log(Direction.Up);

enum Direction2 {
    Up = 1, // we can also declare and assign it to value 
    Down,
    Left, 
    Right}; // we can give default value to the Direction by assiginging our own index in it 

console.log(Direction2.Right);

enum Roles {
    ADMIN = "admin", // if we want to sync the values to be put in the database
    AUTHOR = "author",
    EDITOR = "editor"
};

