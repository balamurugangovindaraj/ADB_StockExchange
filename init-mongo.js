db.createUser(
    {
        user : "mongostock",
        pwd  : "ADBsummer2022!",
        roles: [
            {
                role : "readWrite",
                db   : "mongostock"
            }
        ]
    }
)