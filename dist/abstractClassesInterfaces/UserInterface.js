"use strict";
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["author"] = "author";
    Roles["editor"] = "editor";
})(Roles || (Roles = {}));
;
;
var PermissionList;
(function (PermissionList) {
    PermissionList["read"] = "read";
    PermissionList["write"] = "write";
    PermissionList["execute"] = "execute";
})(PermissionList || (PermissionList = {}));
;
const user4 = {
    name: "john",
    email: "john@email.com",
    phone: 123455,
    gender: "male",
    address: "Kathmandu",
};
const rob = {
    name: "rob",
    numberOfUserReporting: 12,
    email: "rob@gmail.com",
    phone: 124124124,
    gender: "male",
    role: Roles.admin,
    permission: [PermissionList.read, PermissionList.write]
};
//# sourceMappingURL=UserInterface.js.map