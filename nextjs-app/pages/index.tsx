```tsx
import { useEffect, useState } from 'react';
import { ProductList } from '../components/ProductList';
import { SearchBar } from '../components/SearchBar';
import { ExportButton } from '../components/ExportButton';
import { fetchProducts } from '../utils/fetchProducts';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">Product Catalog</h1>
      <SearchBar />
      <ProductList products={products} />
      <ExportButton products={products} />
    </div>
  );
}
```