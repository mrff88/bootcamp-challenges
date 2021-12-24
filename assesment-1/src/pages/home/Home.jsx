import './_Home.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);

  const getProductsFromApi = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    setProducts(response.data);
    setFlag(true);
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <main className="products__main">
      <h1>Productos</h1>
      <section className="products__container">
        {flag ? (
          products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </main>
  );
};

export default Home;
