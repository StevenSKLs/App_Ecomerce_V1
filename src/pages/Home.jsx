import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, InputGroup, Form, Card, Offcanvas, Collapse , Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  filterproductsCategoryThunk,
  getproductsThunk,
  titleThunk
} from "../store/slices/products.slice";


const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getproductsThunk());
    axios
      .get("https://e-commerce-api-v2.academlo.tech/api/v1/categories/")
      .then((res) => setCategories(res.data));
  }, []);

  const [changeInput, setChangeInput] = useState('')

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false)



  return (
    <div className="Card_Home">
      <div>
        <div className="card_menu">
      <Offcanvas.Body>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div>
            {categories.map((category) => (
        <p
          key={category.id}
          onClick={() => {dispatch(filterproductsCategoryThunk(category.id)) ; handleClose()}}
        >
          {category.name}
        </p>
      ))}
          </div>
          
        </div>
      </Collapse>
      
        </Offcanvas.Body>
      </div>
      </div>
      
      <div style={{margin: '7% 2% 0 2%'}}>
      <h1>Home</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={changeInput}

          onChange={(e) => setChangeInput(e.target.value)}
        />
        <Button 
        variant="outline-secondary" id="button-addon2"
        onClick={()=> dispatch(titleThunk(changeInput))}
        >
          Buscar
        </Button>
      </InputGroup>


<Button variant="primary" onClick={handleShow} >
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{height: '3rem',
          width: '7rem'}}
      >
        click
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div>
            {categories.map((category) => (
        <p
          key={category.id}
          onClick={() => {dispatch(filterproductsCategoryThunk(category.id)) ; handleClose()}}
        >
          {category.name}
        </p>
      ))}
          </div>
          
        </div>
      </Collapse>
      
        </Offcanvas.Body>
      </Offcanvas>

      <Row xs={1} md={2} lg ={3} className="g-4" 
      style={{margin: '1rem', gap: '3rem', justifyContent: 'center'}}>
      {productsList.map((product) => (
          <Card style={{ width: '18rem' }}
          key={product.id}>
            <div className="images_img">
              <Card.Img variant="top" src={product.images[0].url} />
            </div>
          
          <Card.Body>
            <p>{product.brand}</p>
            <Card.Title>{product.title}</Card.Title>
            <hr />
            <p>Price</p>
            <Card.Text>
            {product.price} $
            </Card.Text>
            <Button variant="primary" 
            onClick={() => navigate(`/products/${product.id}`)}><i className="bi bi-cart3"></i></Button>
          </Card.Body>
        </Card>
        ))}

    </Row>
      </div>

    </div>
  );
};

export default Home;
