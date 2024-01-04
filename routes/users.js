import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Jhon",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users)
    res.send(users)
})

export default router;