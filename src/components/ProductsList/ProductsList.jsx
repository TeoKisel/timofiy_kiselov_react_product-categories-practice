import { Product } from '../Product/Product';

export const ProductsList = ({ products }) => (
  <tbody>
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </tbody>
);
