import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

const users = [
    // {
    //     firstName: "Jhon",
    //     lastName: "Doe",
    //     age: 25
    // },
    // {
    //     firstName: "Jane",
    //     lastName: "Doe",
    //     age: 25
    // }
]

// all routes in here are starting with /users
router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;
    // const userId = uuidv4();
    // const userWithId = { ...user, id: uuidv4() }

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database!`);
})

export default router;