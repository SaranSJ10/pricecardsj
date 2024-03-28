
import { useState } from 'react';
import Card from 'react-bootstrap/Card';

    function PriceCard({inCart,SetinCart,item,star,price}){
        const [show,Setshow] = useState(true);
        
      

        const handle= ()=>{
            Setshow(!show);
            SetinCart(inCart+1);
        }
        const handler = ()=>{
            Setshow(!show);
            SetinCart(inCart-1);

        }

        return(
            <Card style={{ width: '18rem', height:'400px' }}>
             <div className='px'>450 x 300</div>
           
            <Card.Body>
                <Card.Title ><h5 className = 'prod'>{item}</h5></Card.Title>
                <h6 className='prodt'>{star}</h6>
              <Card.Text>
              <p  class='prodt'>{price}</p>
              </Card.Text>
              {show==true? (
              <button className='btnn' onClick={handle}>Add to cart</button>):
              (<button className='btnn' onClick={handler}>remove from cart</button>)
    }
          
            </Card.Body>
    
            
          </Card>
        )
}
export default PriceCard