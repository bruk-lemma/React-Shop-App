import bcrypt from 'bcryptjs'

const users=[
    {
        name:"Admin User",
        email:"admin@example.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"john doe",
        email:"doe@example.com",
        password:bcrypt.hashSync('123456',10),
    },
    {
        name:"john cena",
        email:"john@example.com",
        password:bcrypt.hashSync('123456',10),
    },
]

export default users