import axios from "axios";



export const postcomp = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    "http://localhost:5000/api/auth/postblog",
    data,
    config
  );

  return response;
};