import api from "./api";

// LOGIN
export const loginUser = async(formData) => {

  const { data } = await api.post(
    "/auth/login",
    formData
  );

  return data;
};

// REGISTER
export const registerUser = async(formData) => {

  const { data } = await api.post(
    "/auth/register",
    formData
  );

  return data;
};