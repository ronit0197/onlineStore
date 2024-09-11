import React from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import Spinner from 'react-bootstrap/Spinner';

const Categories = ({ products, loading, error, title }) => {

  if (error) return <p>Error: {error}</p>;

  return (
    <Container className='my-3'>
      <h6 className='my-lg-0 my-md-3 my-3 fw-bold'>{title}</h6>
      <div className='bg-success p-1 rounded mt-lg-3 mt-md-0 mt-0'></div>
      <div className='row mt-3'>
        {
          loading
            ?
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
            :
            products.map((product, i) => (
              <div key={i} className="col-lg-3 col-md-6 col-6 mb-3">
                <ProductCard product={product} />
              </div>
            ))
        }
      </div>
    </Container>
  )
}

export default Categories