import axios from 'axios';

const searchProduct = async (productName: string) => {
  const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
    params: {
      key: process.env.GOOGLE_API_KEY,
      cx: process.env.CUSTOM_SEARCH_ENGINE_ID,
      q: productName
    }
  });

  if (response.data.items) {
    return response.data.items.map((item: any) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      image: item.pagemap?.cse_image?.[0]?.src,
    }));
  }

  return [];
};

export default searchProduct;