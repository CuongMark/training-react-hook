import axios from '../untils/axios';

export const getUsers = async () => {
    try {
        return await axios.get('/user')
        // TODO check case permission denied
    } catch (ex) {
        throw new Error('get user is exception')
    }
};

export const addUser = async (data) => {
    try {
        return await axios.post('/user', data)
        // TODO check case permission denied
    } catch (ex) {
        throw new Error('add user error')
    }
};
export const updateUser = async (data) => {
    try {
        return await axios.put('/user', data)
        // TODO check case permission denied
    } catch (ex) {
        throw new Error('update user error')
    }
};
export const deleteUser = async (id) => {
    try {
        return await axios.delete('user/' + id)
        // TODO check case permission denied
    } catch (ex) {
        throw new Error('delete user error')
    }
};

export default {
    getUsers,
    addUser,
    updateUser,
    deleteUser
};