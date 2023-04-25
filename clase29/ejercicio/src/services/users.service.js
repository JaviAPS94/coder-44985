import UsersDao from '../dao/classes/users.dao.js'

const usersDao = new UsersDao();

export const getUsers = async () => {
    const result = await usersDao.getUsers();
    return result;
}

export const getUserById = async (userId) => {
    const result = await usersDao.getUserById(userId);
    return result;
}

export const saveUser = async (user) => {
    const result = await usersDao.saveUser(user);
    return result;
}