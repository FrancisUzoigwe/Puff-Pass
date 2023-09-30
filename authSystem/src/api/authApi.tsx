import axios from "axios";

const url: string = "http://localhost:3400/api/v2/auth";

export const registerApi = async (data: any) => {
  try {
    return await axios.post(`${url}/register`, data).then((res: any) => {
      return res.data;
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const signinApi = async (data: any) => {
  try {
    return await axios.post( `${url}/signin`, data).then((res: any) => {
      return res.data
    })
  } catch (error) {
    console.log(error)
  }
}
