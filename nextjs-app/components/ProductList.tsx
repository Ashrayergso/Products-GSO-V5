import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  number: string;
  cost: number;
  link: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;