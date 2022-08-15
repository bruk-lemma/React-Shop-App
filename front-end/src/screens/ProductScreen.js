import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import Ratings from "../components/Ratings";
import {listProductDetails} from "../actions/productActions";
import Loader from "../components/Loader";
import Message from "../components/Message";
//import axios from 'axios'
//import products  from '../products'

const ProductScreen = ({match}) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const {loading, error, product} = productDetails;

  const {id} = useParams();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  //const {id}=useParams();
  //const product=products.find((p)=> p._id ===id)
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Ratings
                  value={product.numReviews}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>price:${product.price}</ListGroup.Item>
              <ListGroup.Item>Description:{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    variant='primary'
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
