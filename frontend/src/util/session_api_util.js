import axios from 'axios';

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    return axios.post('/api/users/login', userData);
};

export const loginEmployer = (empData) => {
    return axios.post('/api/employers/login', empData);
};



export const updateProfile = (userData) => {
    
    return axios.patch(`/api/users/updateProfile/${userData.id}`, userData);
}