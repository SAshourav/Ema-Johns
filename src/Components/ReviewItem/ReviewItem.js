import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewImage.css'
const ReviewItem = ({product,dltHandler}) => {
    const {id,name,quantity,price,img,shipping} = product;
    const handleOnClick = () => {
        dltHandler(id);
    }
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-details-container'>
                <div className='details-container'>
                    <h2>{name}</h2>
                    <p>Price : ${price}</p>
                    <p>Shipping : ${shipping}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div className='delete-container'>
                    <button className='btn-dlt' onClick={handleOnClick}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
            
        </div>

    );
};

export default ReviewItem;