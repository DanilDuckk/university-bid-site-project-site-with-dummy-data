import bcrypt from "bcrypt";

let data = [
    {
        id: 1,
        username: "admin",
        email: "admin",
        password: bcrypt.hashSync("admin", 10),
        role: "admin"
    },
    {
        id: 2,
        username: "user",
        email: "user",
        password: bcrypt.hashSync("user", 10),
        role: "bidder"
    }
];

export default data;