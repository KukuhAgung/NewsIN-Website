import axios from "axios";

const baseUrl = import.meta.env.VITE_BASEURL;
const apiKey = import.meta.env.VITE_APIKEY;

export const getTopNews = async () => {
  const news = await axios.get(
    `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}`
  );
  return news.data.articles;
};

export const getCategoriesNews = async (c) => {
  const news = await axios.get(
    `${baseUrl}/top-headlines?country=us&category=${c}&apiKey=${apiKey}`
  );
  console.log({News : news})
  return news.data.articles;
};
