import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../context/AuthContext';
import {useRouter} from 'next/router';
import { Grommet } from 'grommet';

const Login = () => {
  const router = useRouter()
  const {user, login} = useAuth()
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    const handleLogin = async (e: any) => {
      e.preventDefault() 
      try {
        await login(data.email, data.password)
        router.push('/')
      } catch (err) {
        console.log(err)
      }
      console.log(data)
    }
  
    return (
      <Grommet style={{height:'100vh', width:'100vw',background:'linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)'}}>
          
            <div
              style={{
                display: "flex",
                margin: 'auto',
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gridGap: 8,
                position:'absolute',
                top:'50%',
                left:'50%',
                msTransform: 'translate(-50%, -50%)',
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div
        // style={{
        //   width: '40%',
        //   margin: 'auto',
        // }}
      >
        <h1 className="text-center my-3 ">Login</h1>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e: any) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
  
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e: any) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
            </div> 
        </Grommet>
      
    )
  }
  
  export default Login