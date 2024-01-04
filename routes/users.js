import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
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


// /users/1 = req.params { id: 1 }

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`)
})

router.patch('./:id', (req, res) => {
    const { id } = req.params;
})

export default router;