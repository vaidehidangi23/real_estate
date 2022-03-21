import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
    'x-rapidapi-key': '741ef27682mshf580f19ea3bc9b7p16c412jsna5492b8a3d99'
    },
  });
    
  return data;
}