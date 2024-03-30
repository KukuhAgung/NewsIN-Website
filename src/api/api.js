import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getNews = async () => {
  const news = await axios.get(
    `${baseUrl}/top-headlines?country=us&category=business&apiKey=${apiKey}`
  );
  return news.data.articles;
};
