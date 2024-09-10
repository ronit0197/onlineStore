import React from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from './ProductCard'

const Categories = ({ products, loading, error, title }) => {

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container className='my-3'>
      <h6 className='my-lg-0 my-md-3 my-3 fw-bold'>{title}</h6>
      <div className='bg-success p-1 rounded mt-lg-3 mt-md-0 mt-0'></div>
      <div className='row mt-3'>
        {
          products.map((product, i) => (
            <div key={i} className="col-lg-3 col-md-6 col-12 mb-3">
              <ProductCard product={product} />
            </div>
          ))
        }
      </div>
    </Container>
  )
}

export default Categories