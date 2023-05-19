import React, { useState,useEffect } from 'react';
import Product from './Product';

const Products = () => {
   const [productsf, setProductsf] = useState([]);

     useEffect(() => {
      const fetchHandler = async ()=>{
          await fetch("http://localhost:8888/products")
               .then((res) => res.json())
               .then((data )=> setProductsf(data.products))
               .catch((err)=> console.log(err))
      }
      fetchHandler();
     }, [])

     console.log(productsf);
     
    return (
        <div  className='container'>
            <ul className= "list-unstyled"> 
                {productsf.map((data,key)=>(
                      <li key={key}>
                        <Product id={data._id} name={data.name} image={data.imgURL} description={data.description} price={data.price} quantity= {data.quantity} />
                      </li>
                 ))} 
            </ul>
        </div>
    );
};

export default Products;





// const dummy_products = [
//     {
//         name: 'smart-phone',
//         image: 'https://m.media-amazon.com/images/I/61DUz8pn-sL._SL1500_.jpg',
//         description: 'Apple product',
//         price: '67000/-',
//         quantity: '23',
//     },
//     {
//         name: 'smart-phone',
//         image: 'https://m.media-amazon.com/images/I/61DUz8pn-sL._SL1500_.jpg',
//         description: 'Apple product',
//         price: '67000/-',
//         quantity: '23',
//     },
//     {
//         name: 'smart-phone',
//         image: 'https://m.media-amazon.com/images/I/61DUz8pn-sL._SL1500_.jpg',
//         description: 'Apple product',
//         price: '67000/-',
//         quantity: '23',
//     },
// ];