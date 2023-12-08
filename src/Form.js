import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React,{useState,useContext} from 'react';
import { productContext } from './Productcontext';

function Forms() {
  
const{setProductname,setProductprice,setProductquantity,setProductDes,setShowproduct}=useContext(productContext)
  
  return (
    <Form  style={{width: '40%',marginLeft:"30%",marginTop:'10%', padding:"10px"  ,backgroundColor:"white" ,borderRadius:"15px 50px",boxShadow:"0 0 10px blue" }}>
      <Form.Group className="mb-3 " controlId="formGroupText" >
        
        <Form.Control type="text" placeholder="Enter the product name" style={{marginTop:'5%', width:"50%",padding:"15px" ,marginBottom:"20px", borderRadius:"20px", border:"1px solid gray"  }}
        onChange={(event)=>{
            setProductname(event.target.value)

        }}
        
        
        />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formGroupTest">
          
        <Form.Control type="text" placeholder="Enter the product price" style={{ padding:"15px" ,marginBottom:"20px",  width:"50%",borderRadius:"20px", border:"1px solid gray"} }  
        onChange={(event)=>{
                setProductprice(event.target.value)
        }}
        
        
        
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupTest">
          
        <Form.Control type="text" placeholder="Enter the product quantity" style={{ padding:"15px"  ,marginBottom:"20px",  width:"50%",borderRadius:"20px", border:"1px solid gray"   }} 
        onChange={(event)=>{
            setProductquantity(event.target.value)
        }}
        
        
        />
      </Form.Group>



      <Form.Group className="mb-3" controlId="formGroupTest">
        
        <Form.Control type="text" placeholder="Enter product description " style={{ padding:"15px"  ,marginBottom:"20px",  width:"50%",borderRadius:"20px" , border:"1px solid gray"  }}  
        onChange={(event)=>{
            setProductDes(event.target.value)
        }}
        
        
        />
      </Form.Group>



      <Button variant="success" style={{ padding:"10px" ,backgroundColor:"blue" ,borderRadius:"20px"  ,border:"none",color:"white"}} 
      onClick={()=>{
        setShowproduct(true)
      }}
      
      
      >Submit</Button>{' '}

      {/* {
        showProduct && <h2>Product-Name:{productName},Product-Price:{productPrice},product-Quantity:{productQuantity},Description:{productDes} </h2>
      } */}


    </Form>
  );
}

export default Forms;