const buildOptions = (data, isDataFormData) => {
    const options = {};

    if (data) {
        options.body = !isDataFormData ? JSON.stringify(data) : data;
        options.headers = !isDataFormData ? {
            'Content-Type': 'application/json',
        } : {};
    }

    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    return options;
};

const request = async (method, url, data, isDataFormData) => {
    
    const response = await fetch(url, {
        ...buildOptions(data, isDataFormData),
        method,
    });

    if (response.status === 204) {
        return {};
    }
    
    const result = await response.json();
    
    if (!result.success) {
        alert(result.error);
        throw result.error;
    } 


    return result.result;
};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');