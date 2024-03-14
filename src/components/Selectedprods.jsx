import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

const Selectedprods = (product) => {
    const dispatch = useDispatch()
    const [price, setPrice] = useState(product.product.price)
    const [count, setCount] = useState(0)


    useEffect(() => {
        setPrice(product.product.price * count)
        dispatch({ type: "PRODUCTS_PRICE", price: product.product.price, count: count })
    }, [count])

    // console.log({price: price})
    return (
        <>
            <div className='btn-container'>
                <button className='btn' onClick={() => setCount(count + 1)}>+</button>
                <button className='btn' onClick={() => { count > 0 && setCount(count - 1) }}>-</button>
            </div>
            <p>{count}X </p>
            <p>{price}$</p>
        </>
    )
}

export default Selectedprods