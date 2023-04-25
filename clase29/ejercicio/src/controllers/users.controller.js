export const getUsers = async (req, res) => {
    try {
        const result = await userService.getUsers();
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await userService.getUserById(id);
        if (!result)
            return res.status(404).send({ status: 'error', message: 'user not found' });
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}

export const saveUser = async (req, res) => {
    try {
        const user = req.body;
        const result = await userService.saveUser(user);
        res.send({ status: 'success', result });
    } catch (error) {
        res.status(500).send({ status: 'error', message: error });
    }
}