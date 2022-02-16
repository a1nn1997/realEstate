import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
       'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY,
       /*'d51128f184mshbf28d3dda792dacp1ca4e0jsn3be14fb40370'*/
    },
  });
    
  return data;
}