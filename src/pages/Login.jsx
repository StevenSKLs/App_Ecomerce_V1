import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import user_academlo from '../assets/user_academlo.png'

const Login = () => {
  const { register, handleSubmit } = useForm();


  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data)
    axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login/', data).then(res => {
    localStorage.setItem('token' , res.data.token)
    navigate('/')
  }).catch(error =>{
      if(error.response.status === 401){
        alert('Error data user')
      }
      console.log(error)
    })
  }

  //modific
  const logout = () =>{
    localStorage.setItem("token", "");
    navigate("/login");
  }

  return (
    <>
    {localStorage.token.length > 1 ? 
    <div>
      
    <Card style={{ width: '18rem' , margin: '10vh auto'}}>
      <Card.Img variant="top" src={`${user_academlo}`} />
      <Card.Body>
        <Card.Title>Welcome back user.</Card.Title>
        <Card.Text>
        What would you like to buy today?
        </Card.Text>
        <Button variant="primary" onClick={() => logout()}><b>Log Out</b></Button>
      </Card.Body>
    </Card>
     </div>
    :
    <Form onSubmit={handleSubmit(submit)} style={{margin: '14vh 6%'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        {...register("email")}
      />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        {...register("password")}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
    <Card style={{ width: '18rem' , margin: '10vh auto'}}>
      <Card.Body>
        <Card.Img variant="top" src={`${user_academlo}`} style={{ height:'7rem', width: '7rem', background: 'radial-gradient(black, transparent)',
    marginBottom: '1rem'}}/>
        <Card.Title>Definite example.</Card.Title>
        <Card.Text>
        user: hola_mundo@gmail.com
        <hr />
        password: hola_mundo@gmail.com
        </Card.Text>
      </Card.Body>
    </Card>
  </Form>

  }
    
    </>
  );
};

export default Login;
