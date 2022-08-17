import React, {useEffect} from "react";
import {Link, useParams, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Col, Row, ListGroup, Image, Form, Button, Card} from "react-bootstrap";
import Message from "../components/Message";
import {addToCart} from "../actions/cartActions";
import {getState} from "react-redux";

const Cart = ({location, match, history, navigate}) => {
  const {id} = useParams();
  location = useLocation();

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
    // localStorage.setItem("cartItems", getState().cart.cartItems);
  }, [dispatch, id, qty]);

  //console.log(cartItems);

  return (
    <div>
      <h4>{`cart items${cartItems}`}</h4>
    </div>
  );
};

export default Cart;
