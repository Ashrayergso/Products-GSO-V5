import axios from 'axios';

type Product = {
  name: string;
  number: string;
  cost: number;
  link: string;
  image: string;
  quantity: number;
};

export const exportList = async (selectedProducts: Product[]) => {
  try {
    const response = await axios.post('/api/export', selectedProducts);
    if (response.status === 200) {
      window.location.href = response.data.file;
    } else {
      throw new Error('Failed to export list');
    }
  } catch (error) {
    console.error(error);
  }
};