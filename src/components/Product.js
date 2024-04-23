import React from 'react'

export default function Product(props) {
    console.log(props)
    return (
        <div className='row mt-4'>
            <div className='col-5'>
                <h2>{props.product.name}<span className="badge text-bg-secondary"> ₹{props.product.price}</span></h2>
            </div>
            <div className='col-3'>
                <div class="btn-group">
                    <a href="#" className="btn btn-primary active" aria-current="page" onClick={()=>props.incrementQuantity(props.index)}>+</a>
                    <a href="#" className="btn btn-primary">{props.product.quantity}</a>
                    <a href="#" className="btn btn-primary" onClick={()=>props.decrementQuantity(props.index)}>-</a>
                </div>
                
            </div>
            <div className='col-2'>
                    {props.product.quantity * props.product.price}
            </div>
            <button className='col-2 btn btn-danger' onClick={()=>props.removeItem(props.index)}>Remove</button>
        </div>
    )
}
