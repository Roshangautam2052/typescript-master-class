"use strict";
const STATUS_LOADING = "loading";
// By using these enums we don't have to declare constants
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
;
console.log(Direction.Up);
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
; // we can give default value to the Direction by assiginging our own index in it 
console.log(Direction2.Right);
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "admin";
    Roles["AUTHOR"] = "author";
    Roles["EDITOR"] = "editor";
})(Roles || (Roles = {}));
;
//# sourceMappingURL=enums.js.map