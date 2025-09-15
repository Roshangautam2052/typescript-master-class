enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor",
};

interface Role {
    role: Roles
}

interface User6 {
    name:string;
    email:string;
    phone:number;
    gender:string;
};

interface AdminUser extends User6, Role, UserPermission{
    numberOfUserReporting: number;
}

enum PermissionList {
    read = "read",
    write = "write",
    execute = "execute",
}

interface UserPermission {
    permission : PermissionList[]
}


interface UserWithAddress extends User6 {
        address:string;
};

const user4 :UserWithAddress ={
    name: "john",
    email: "john@email.com",
    phone: 123455,
    gender: "male",
    address: "Kathmandu",
};


const rob: AdminUser = {
    name: "rob",
    numberOfUserReporting: 12,
    email: "rob@gmail.com",
    phone: 124124124,
    gender: "male",
    role: Roles.admin,
    permission: [PermissionList.read, PermissionList.write]
}