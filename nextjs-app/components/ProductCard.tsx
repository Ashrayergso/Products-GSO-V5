import React from 'react';

interface Product {
  id: number;
  name: string;
  number: string;
  cost: number;
  link: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onSearch: (product: Product) => void;
  onAlternativeSearch: (product: Product) => void;
  onSelect: (product: Product, selected: boolean) => void;
  onQuantityChange: (product: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSearch, onAlternativeSearch, onSelect, onQuantityChange }) => {
  const [selected, setSelected] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.checked);
    onSelect(product, event.target.checked);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
    onQuantityChange(product, Number(event.target.value));
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Product Number: {product.number}</p>
      <p>Cost: {product.cost}</p>
      <a href={product.link}>Product Link</a>
      <button onClick={() => onSearch(product)}>Search</button>
      <button onClick={() => onAlternativeSearch(product)}>Alternative Search</button>
      <input type="checkbox" checked={selected} onChange={handleSelect} />
      <input type="number" value={quantity} onChange={handleQuantityChange} />
    </div>
  );
};

export default ProductCard;