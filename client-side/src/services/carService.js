import * as request from "../lib/request";

const baseUrl = "http://localhost:3000/cars";

export const getAll = async () => {
  const res = await request.get(baseUrl);
  return res;
};

export const getAllByUserId = async (id) => {
  const res = await request.get(baseUrl + "/user/" + id);
  return res;
};

export const create = async (formData) => {
  const res = await request.post(`${baseUrl}/create`, formData,true);
  console.log(formData, "www");
  return res;
};

export const update = async (id, formData) => {
  console.log(formData);
  const res = await request.post(`${baseUrl}/${id}/edit`, formData, true);
    return res;

};

export const getOne = async (id) => {
  const res = await request.get(baseUrl + "/" + id);
  return res;
};

export const deleteOffer = async (id) => {
  const res = await request.get(baseUrl + "/" + id + "/delete");
  return res;
};

export const createComment = async (id, values) => {
  const res = await request.post(baseUrl + "/comment/" + id, values);
  return res;
};

export const deleteComment = async (id) => {
  const res = await request.get(baseUrl + "/comment/" + id + "/delete");
  return res;
};
