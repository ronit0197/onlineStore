import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Form, InputGroup, Spinner } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { useNavigate, useParams } from 'react-router-dom';
import Categories from '../Components/Categories';

const Search = () => {

    let { s } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchKeyward, setSearchKeyward] = useState("")

    const navigate = useNavigate();

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/search?q=' + s);
                setProducts(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, [s])

    const search = () => {
        if (searchKeyward === "") {
            navigate('/search/all')
        } else {
            navigate('/search/' + searchKeyward)
        }
    }

    console.log("Search products:", products)

    return (
        <Container className='mt-4 p-3 page-section'>
            <InputGroup className="mb-3 border border-success border-1 rounded">
                <Form.Control
                    placeholder="Search your desired product..."
                    aria-describedby="basic-addon2"
                    className='shadow-none border-0'
                    value={searchKeyward}
                    onChange={(e) => setSearchKeyward(e.target.value)}
                />
                <InputGroup.Text onClick={search} id="basic-addon2" className='custom-btn text-white'><Icon.Search /></InputGroup.Text>
            </InputGroup>
            <div className='row mt-4'>
                <span className='fw-medium text-body-tertiary fs-6'>
                    <span className='me-2'>Search result:</span>
                    {
                        loading
                            ?
                            <Spinner
                                animation="border"
                                role="status"
                                size="sm"
                            >
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            products.total
                    }
                </span>
                {
                    loading
                        ?
                        ""
                        :
                        products.total === 0
                            ?
                            <h4 className='fw-medium text-body-tertiary text-center p-3 mt-3'>No result found</h4>
                            :
                            <Categories products={products} loading={loading} error={error} title="" />
                }
            </div>
        </Container>
    )
}

export default Search