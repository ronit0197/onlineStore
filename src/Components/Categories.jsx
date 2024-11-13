import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Spinner from 'react-bootstrap/Spinner';

const Categories = ({ products, loading, error, title }) => {

  const [visibleProducts, setVisibleProducts] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleProducts((prev) => prev + 8); // Load 8 more products
      setLoadingMore(false);
    }, 1000); // Simulate loading delay (1 second)
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <Container className='my-3'>
      <h6 className='my-lg-0 my-md-3 my-3 fw-bold'>{title}</h6>
      <div className='bg-success p-1 rounded mt-lg-3 mt-md-0 mt-0'></div>
      <div className='row mt-3'>
        {loading ? (
          <Container className='d-flex justify-content-center align-items-center py-5'>
            <Spinner animation="grow" size="sm" role="status" className='mx-2'>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Spinner animation="grow" size="sm" role="status" className='mx-2'>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Spinner animation="grow" size="sm" role="status" className='mx-2'>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Container>
        ) : (
          products.products.slice(0, visibleProducts).map((product, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-6 mb-3">
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
      {!loading && visibleProducts < products.products.length && (
        <div className='d-flex justify-content-center mt-3'>
          <button className='btn btn-success' onClick={handleLoadMore} disabled={loadingMore}>
            {loadingMore ? (
              <Spinner
                animation="border"
                role="status"
                size="sm"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              'Load More'
            )}
          </button>
        </div>
      )}
    </Container>
  )
}

export default Categories