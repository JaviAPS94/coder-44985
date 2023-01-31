import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [];

app.get('/api/users', (req, res) => {
    res.send(users);
});

app.post('/api/users', (req, res) => {
    // {
    //     first_name: 'Alex',
    //     last_name: 'Pinaida',
    //     user_name: 'ap'
    // }
    const user = req.body;

    if(!user.first_name || !user.last_name) {
        return res.status(400).send({status: 'error', message: 'Incomplete values'});
    }

    users.push(user);

    res.send({status: 'sucess', message: 'User created'});
});

app.put('/api/users/:id', (req, res) => {
    const user = req.body;
    const userId = Number(req.params.id);

    if(!user.first_name || !user.last_name) {
        return res.status(400).send({status: 'error', message: 'Incomplete values'});
    }

    const newUser = { id: userId, ...user }

    const index = users.findIndex(u => u.id === userId)

    if (index != -1) {
        users[index] = newUser;
        res.send({status: 'sucess', message: 'User updated'});
    } else {
        res.status(404).send({status: 'error', message: 'User not found'});
    }
});

app.delete('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index != -1) {
        users.splice(index, 1);
        res.send({status: 'sucess', message: 'User deleted'});
    } else {
        res.status(404).send({status: 'error', message: 'User not found'});
    }
})

app.listen(8080, () => console.log('Server running'));