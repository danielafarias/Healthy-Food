import axios from "axios";

export const getZip = async (zip: string) => {
  const response = await axios({
    method: "get",
    url: "viacep.com.br/ws/" + zip +"/json/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};