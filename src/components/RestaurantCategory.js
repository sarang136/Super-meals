import React, { useState } from 'react'
import ItemList from './ItemList'
import { ChevronDown } from 'lucide-react';
const RestaurantCategory = ({ data , showItems, setShowIndex}) => {


    console.log("The new data" + data)

    const handleClick = () => {
        // setShowItems(!showItems );
        setShowIndex();
    }



    return (
        <div className='Accordian-container'>
            {/* header */}
            <div onClick={handleClick} className='acc-header'>
                <div className='child'>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span><ChevronDown size={20} /></span>
                </div>
          {   showItems &&    <ItemList items={data.itemCards}  />}
            </div>

        </div>
    )
}

export default RestaurantCategory