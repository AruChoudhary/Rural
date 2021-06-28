import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './ProductList.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';


const ProductLists = (props) => {

    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    const [products] = useState([]);
    const [allProducts] = useState([
        {
            name: 'Terracotta Horse from Panchmura, Bengal',
            cost: 500,
            image: 'https://i.ibb.co/R9CLS8T/prod1.png'
        },
        {
            name: 'Jaapi from Khargulli, Assam',
            cost: 1000,
            image: 'https://i.ibb.co/z4yMFwn/prod2.png'
        },
        {
            name: 'Little Indian Elephant from Udaipur, Rajasthan',
            cost: 2450,
            image: 'https://i.ibb.co/LDKT6pQ/prod3.png'
        },
        {
            name: 'Krishna Stone Carving from Solur, Karnataka',
            cost: 2500,
            image: 'https://i.ibb.co/CwV3R8s/prod4.png'
        },
        {
            name: ' Wooden Kerala Boat from Vengoor, Kerala ',
            cost: 250,
            image: 'https://i.ibb.co/zb838vP/prod5.png'
        },
        {
            name: 'Coir and Cane Floor mats from Kollam, Kerala',
            cost: 250,
            image: 'https://i.ibb.co/sg1jbBP/prod6.png'
        },
        {
            name: 'Kathakali Mask from Kalady, Kerala',
            cost: 2450,
            image: 'https://i.ibb.co/bFD4nGg/prod7.png'
        },
        {
            name: 'Sandalwood War Elephant from Mysore, Karnataka',
            cost: 10000,
            image: 'https://i.ibb.co/vsQw7GS/prod8.png'
        },
        {
            name: 'Bamboo and Cane baskets from Birbhum, West Bengal',
            cost: 200,
            image: 'https://i.ibb.co/Z2qvbQj/prod9.png'
        }
    ])
    const fillProductsForVillage = (villageName) => {
        products.splice(0,products.length);
        if(villageName.length % 3 === 0)
        {
            products.push(allProducts[0]);
            products.push(allProducts[3]);
            products.push(allProducts[6]);
            products.push(allProducts[5]);    
        }
        else if(villageName.length % 3 ===1)
        {
            products.push(allProducts[1]);
            products.push(allProducts[4]);
            products.push(allProducts[7]);
            products.push(allProducts[0]); 
        }
        else
        {

            products.push(allProducts[8]);
            products.push(allProducts[1]);
            products.push(allProducts[6]);
            products.push(allProducts[3]); 
            products.push(allProducts[5]); 
        }
    }

    const addToCart = (product) => {
        setCart([...cart, {...product}]);
    }
    
    const removefromCart = (productToRemove) => {
        setCart(cart.filter(product => product!=productToRemove))
    }

    const getCartValue = () => {
        let value = 0;
        cart.map((product,idx) => {
            value = value + product.cost;
        })
        return value;
    }
    const renderProducts = () => (
        <>
       
            {products.map((product, idx) => (
             
                    <div className="ui fluid card" key ={idx} style={{ width: '385px', backgroundColor: 'transparent', marginRight: '20px'}}>
                        <div className="image">
                            <img src={product.image} style={{ height: '400px' }} />
                        </div>
                        <div className="content" style={{ textAlign: 'center', backgroundColor: 'rgb(212, 169, 131)' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'peachpuff' }}>
                            <a className="header" style={{ float: 'left', marginTop:'10px' }}> ${product.cost}</a>
                            <div >
                                <div className="ui right floated google plus vertical animated button" >
                                    <div className="hidden content" onClick={() => addToCart(product)}>Shop</div>
                                    <div className="visible content">
                                        <i className="shop icon"></i>
                                    </div>
                                </div>
                                {/* <button className="ui right floated google plus button" onClick={() => addToCart(product)}> Add to Cart</button> */}
                            </div>
                        </div>
                    </div>
          
                
            ))}
           
            
     
    </>
    );

    const renderPrice = () => {
        //console.log(getCartValue());
        return(
            <div>
            <div className="ui bottom attached warning compact message" style={{display:'flex', justifyContent:'center'}}>
                <h3> Total cart Value= ${getCartValue()}</h3>
            </div>
            <br />
            <br />
            <Link to={{
                pathname: "/cart",
                aboutProps: {
                    amount : getCartValue() ,
                    },
                }} className="item">
                <button className="ui right floated google plus button">
                    Proceed For Checkout
                </button>
            </Link>
            <br />
            
            </div>
        );
    };

    const renderCart = () => (

        <>
         <div>
        {cart.map((product, idx) => (
                <div className="column" style={{ width: '500px', marginBottom:'10px'}} key={idx}>
                    <div className="ui fluid card card-display" style={{backgroundColor: 'transparent', marginRight: '20px' }}>
                        
                        <div className="content" style={{ textAlign: 'center', backgroundColor: 'rgb(212, 169, 131)' }}>
                            <a className="header">{product.name} </a>
                        </div>
                        <div className="content" style={{ backgroundColor: 'peachpuff'}}>
                            <a className="header" style={{ float: 'left', marginTop:'10px' }}> ${product.cost}</a>
                            <button className="ui right floated google plus button" onClick={() => removefromCart(product)}> Remove from Cart</button>
                        </div>
                    </div>
                </div>
                
            ))}
            <br />
            <br />
            {getCartValue()===0 ? 
                <div className="ui bottom attached warning compact message" style={{textAlign:'center'}} >
                    <h2>
                        Your cart feels so light!
                    </h2>
                    <h3>
                        Go to the products page to select your favorite items!
                    </h3>
                </div> : 
                renderPrice()
            }
            </div>
        </>
    );

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }
    

    return (
        <div>
            <div>
                <br />
                <br />
            </div>

            <header>
                <button 
                    className="ui right floated google plus button" 
                    onClick={() => navigateTo(PAGE_CART)}
                > 
                    <i className="shopping cart icon"></i> 
                        Go to cart ({cart.length})
                </button>
                <button 
                    className="ui right floated google plus button" 
                    onClick={() => navigateTo(PAGE_PRODUCTS)}
                > 
                        View Products
                </button>
            </header>
            <div className="products">
                <br />
                <br />
                <br />
                {fillProductsForVillage(props["MyProp"])}
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CART && renderCart()}


            </div>
            <br />



        </div>

    )
}


export default ProductLists;