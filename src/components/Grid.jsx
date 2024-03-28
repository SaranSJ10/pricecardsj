import { Col, Container, Row } from "react-bootstrap";
import PriceCard from "./PriceCard";



function Grid(){

    return(
            <Container className="cont">
                  <Row className="grid">
                 <Col s={3}><PriceCard /></Col>
                 <Col s={3}><PriceCard/></Col>
                <Col ><PriceCard /></Col>
                 <Col ><PriceCard/></Col>
                 </Row>
                <Row>
                 <Col s={3}></Col>
                   <Col s={3}></Col>
                   <Col></Col>
                    <Col></Col>
                
              </Row>
                <Row className="grid"> 
              <Col s={3}><PriceCard/></Col>
                   <Col s={3}><PriceCard/></Col>
                   <Col ><PriceCard/></Col>
                   <Col ><PriceCard/></Col>
               </Row>

              </Container>

        //    <div  className="connt"> 

        //          {product?.map((products,idx)=>(
                    
        //             <PriceCard key={idx}
        //             inCart={inCart}
        //             SetinCart={SetinCart}
        //             item = {products.item}
        //         star = {products.star}
        //         price = {products.price}/>
                
        //          ))}
           
    

        //    </div>
           
           

        
        
    )
}
export default Grid