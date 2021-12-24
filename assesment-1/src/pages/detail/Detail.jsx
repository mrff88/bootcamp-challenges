import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './_Detail.scss';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const getProductsFromApi = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(response.data);
      setFlag(true);
    };
    getProductsFromApi();
  }, [id]);

  return (
    <main className="product__main">
      {flag ? (
        <article className="product__container">
          <figure>
            <figcaption>
              <h2>{product.title}</h2>
            </figcaption>
            <img src={product.image} alt={product.title} />
          </figure>
          <footer className="product__footer">
            <div className="product__detail">
              <p className="product__price">{`$ ${product.price}`}</p>
              <div>
                <p>{`⭐ ${product['rating']?.rate} out of 5`}</p>
                <p>{`${product['rating']?.count} ratings`}</p>
                <p className="product__category">{`in ${product.category}`}</p>
              </div>
            </div>
            <p className="product__description">{product.description}</p>
          </footer>
        </article>
      ) : (
        <h1>Loading...</h1>
      )}
    </main>
  );
};

export default Detail;
