import axios from 'axios';

interface Product {
  id: number;
  name: string;
  number: string;
  cost: number;
  link: string;
  image: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('/api/products');
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchProducts;