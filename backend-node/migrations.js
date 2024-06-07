const User = require('./model/user')

const contents = [
    {
        name: 'C1', 
        CreatedDate: new Date(),
        Status: 'Pending'
    }
]

const users = [
    {
        firstName: 'Youssef',
        lastName: 'Bahomman',
        email: "Youssef@gmail.com"
    }
]

User.add(users)