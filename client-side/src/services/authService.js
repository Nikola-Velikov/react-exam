import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/auth';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (data) => request.post(`${baseUrl}/register`, data);

export const logout = () => request.get(`${baseUrl}/logout`);

export const getOne = async (id) => {
    const result = await request.get(baseUrl + '/' + id);
    return result;
}

export const changePassword = async (id, payload) => {
    return await request.post(baseUrl + '/users/' + id + '/changepass', payload);
}

export const updateUser = async (id, payload) => {
    return await request.post(baseUrl + '/users/' + id + '/edit',{
        username: payload.get('username'),
        email: payload.get('email'),
    });
}

export const deleteUser = async (id) => {
    const res = await request.get(baseUrl + "/" + id + "/delete");
    return res;
  };