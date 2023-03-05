const checkUserRoles = (userRole, updatedRole) => {
    const roles = [
        {
            "user": "user",
            "updated": "admin"
        },
        {
            "user": "user",
            "updated": "master-admin"
        },
        {
            "user": "admin",
            "updated": "user"
        },
        {
            "user": "admin",
            "updated": "master-admin"
        },
        {
            "user": "master-admin",
            "updated": "user"
        },
        {
            "user": "master-admin",
            "updated": "admin"
        }
    ]
    roles.forEach(element => {
        if (element.user === userRole && element.updated === updatedRole) {
            return true;
        }
    });
    return false;
    // for (let index = 0; index < roles.length; index++) {
    //     const element = roles[index];
    //     if (element.user === userRole && element.updated === updatedRole) {
    //         return true;
    //     }
    // }
}

module.exports = checkUserRoles;