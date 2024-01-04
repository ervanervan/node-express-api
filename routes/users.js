import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
    res.send('Helo from users')
})

export default router;