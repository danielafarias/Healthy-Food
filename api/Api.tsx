import axios from "axios";

export const getZip = async (zip: string) => {
  const response = await axios({
    method: "get",
    url: "https://viacep.com.br/ws/" + zip + "/json/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};