import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  // Function to limit the title to 4 words
  const getLimitedTitle = (title) => {
    const words = title.split(' ');
    return words.length > 4 ? words.slice(0, 4).join(' ') + '...' : title;
  };

  const getLimitedDesc = (desc) => {
    const words = desc.split(' ');
    return words.length > 12 ? words.slice(0, 12).join(' ') + '...' : desc;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Icon.StarFill key={i} color='orange' />
        ))}
        {halfStar && <Icon.StarHalf color='orange' />}
        {[...Array(emptyStars)].map((_, i) => (
          <Icon.Star key={i} color='orange' />
        ))}
      </>
    );
  };

  return (

    <Card className="product-card">
      <Link to={`/product/` + product.id} className="nav-link">
        <Card.Img variant="top" src={product.image} className="product-image" />
      </Link>
      <Card.Body>
        <Link to={`/product/` + product.id} className="nav-link">
          <Card.Title className='card-title'>{getLimitedTitle(product.title)}</Card.Title>
          <Card.Text className='card-desc'>
            {getLimitedDesc(product.description)}
          </Card.Text>
          <div className='mb-3 card-price-rating'>
            <h6 className='text-muted me-3'><Icon.CurrencyRupee />{product.price}</h6>
            {renderStars(product.rating.rate)}
          </div>
        </Link>
        <Button onClick={() => addToCart(product)} variant="success" className="w-100">
          Add to cart
          <Icon.Bag className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
