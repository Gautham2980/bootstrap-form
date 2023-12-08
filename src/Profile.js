// const {productName,productPrice,productQuantity,productDes,}=useContext(productContext)

import Card from 'react-bootstrap/Card';

import React ,{useContext}from "react";
import { productContext } from './Productcontext';

function BasicExample() {

  const{productName,productPrice,productQuantity,productDes}=useContext(productContext)
  return (
    <Card style={{ width: '35%',marginLeft:"30%" , marginTop:'5%',padding:"10px"  ,backgroundColor:"white" ,borderRadius:"15px 50px",boxShadow:"0 0 10px blue"}}>
      
      <Card.Body>
        <Card.Title  style={{width:"30%",marginLeft:"35%",padding:"10px"  ,backgroundColor:"gray",color:"white" }}>product Details</Card.Title>

        <Card.Img variant="top" src="2.png" height={"150px"} width={"200px"}  style={{ padding:"10px"   }}/>

        <Card.Text  style={{ padding:"10px"}}>
          Product Name :{productName}
        </Card.Text >
        <Card.Text  style={{ padding:"10px"}}>
          Product Price : {productPrice}
        </Card.Text>
        <Card.Text  style={{ padding:"10px"}}>
          Product Quantity : {productQuantity}
        </Card.Text>
        <Card.Text  style={{ padding:"10px"}}>
          Product Description : {productDes}
        </Card.Text>

        

       
      </Card.Body>
    </Card>
  );
}

export default BasicExample;