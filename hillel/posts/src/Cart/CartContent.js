import React from 'react'

export default function CartContent({counter, cartItems}) {
    return <div>Cart Content {counter}
        <div>Items:</div>
        <ul>
            {cartItems.map(item => <li key={item.id}> {item} </li>)}
        </ul>
    </div>

};

