import { useState, useEffect } from 'react';

const items = [
    {
        name: 'apple',
        price: 0.39,
    },
    {
        name: 'banana',
        price: 0.79,
    },
    {
        name: 'cherry tomatoes',
        price: 3.99,
    },
];

function ShoppingCart() {
    const [cart, setCart] = useState([
        // { name: 'apple', quantity: 3, price: 0.39 },
        // { name: 'banana', quantity: 6, price: 0.79 },
    ]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (cart.length !== 0) {
            const subTotals = cart.map((item) => {
                return item.price * item.quantity;
            });

            setTotal(subTotals.reduce((a, b) => a + b).toFixed(2));
        }
    }, [cart]);

    function decQuantity(e) {
        const itm = e.target.parentNode.parentNode.firstChild.innerText;
        cart.forEach((i) => {
            if (i.name === itm) {
                if (i.quantity < 2) {
                    console.log('Quantity cannot be less than 1');
                    return;
                }
                i.quantity -= 1;
                console.log(cart);

                setCart([...cart]);
            }
        });
    }

    function incQuantity(e) {
        const itm = e.target.parentNode.parentNode.firstChild.innerText;
        cart.forEach((i) => {
            if (i.name === itm) {
                i.quantity += 1;
                console.log(cart);

                setCart([...cart]);
            }
        });
    }

    function addToCartHandler(e) {
        if (cart.length !== 0) {
            cart.forEach((i) => {
                if (i.name === e.target.parentNode.children[0].innerText) {
                    console.log(i.name);
                    throw new Error('Item already in basket');
                }
            });
        }
        const newItem = {
            name: e.target.parentNode.children[0].innerText,
            quantity: 1,
            price: parseFloat(
                e.target.parentNode.children[1].innerText.slice(1)
            ),
        };

        //console.log(newItem);
        setCart([...cart, newItem]);
    }

    if (cart.length === 0) {
        return (
            <div>
                <h1>Shopping Cart</h1>
                <div className='cart'>
                    <div className='items'>
                        <h2>Items</h2>
                        {items.map((item) => (
                            <div key={item.name}>
                                <h3>{item.name}</h3>
                                <p>${item.price}</p>
                                <button onClick={addToCartHandler}>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2>Cart</h2>
                        <p>Empty</p>
                    </div>
                </div>
                <div className='total'>
                    <h2>Total: {`$${total}`}</h2>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>Shopping Cart</h1>
            <div className='cart'>
                <div className='items'>
                    <h2>Items</h2>
                    {items.map((item) => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <button onClick={addToCartHandler}>
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
                <div>
                    <h2>Cart</h2>
                    {cart.map((item) => (
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <p>
                                <button onClick={decQuantity}>-</button>
                                {item.quantity}
                                <button onClick={incQuantity}>+</button>
                            </p>
                            <p>
                                Subtotal: $
                                {(item.quantity * item.price).toFixed(2)}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='total'>
                <h2>Total: {`$${total}`}</h2>
            </div>
        </div>
    );
}

export default ShoppingCart;
