import * as request from '../lib/request';

const baseUrl = 'http://localhost:3000/cars';

export const getAll = async () => {
    const res = await request.get(baseUrl);
    return res;
}

export const getAllByUserId = async (id) => {
    const res = await request.get(baseUrl + '/user/' + id);
    return res;
}

export const create = async (formData) => {
    
    const res = await request.post(`${baseUrl}/create`, {
            model: formData.get('model'),
            price: formData.get('price'),
            mileage: formData.get('mileage'),
            color: formData.get('color'),
            carImage: formData.get('carImage'),
            description: formData.get('description'),
            fuel: formData.get('fuel'),
            telephone:formData.get('telephone'),
            seats:formData.get('seats'),
        
            
    });
    console.log(formData,'www');
    return res;
}

export const update = async (id, car) => {
    const res = await request.post(baseUrl + '/' + id + '/edit', car);
    return res;
}

export const getOne = async (id) => {
    const res = await request.get(baseUrl + '/' + id);
    return res;
}

export const deleteOffer = async (id) => {
    const res = await request.get(baseUrl + '/' + id + '/delete');
    return res;
}

export const comment = async (id, values) => {
    const res = await request.post(baseUrl + '/comment/' + id, values);
    return res;
}

export const deleteComment = async (id) => {
    const res = await request.get(baseUrl + '/comment/' + id + '/delete');
    return res;
}