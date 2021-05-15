import React from 'react';
import './index.css';

function Product(props) {
    return (
        <div id="product-container">
            {props.data.map( item => {
                return(
                    <div key={item.id} id="product">
                        <div id="product-div1" style={{backgroundImage: `url(${item.image})`}}>
                            <p id="product-topic">{item.topic}</p>
                        </div>
                        <div id="product-div2">
                            <p id="product-description">{item.description}</p>
                            <div id="product-div2-div">
                                <p id="product-price">{item.price}</p>
                                <button type="button" id="product-btn">ADD</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Product;
