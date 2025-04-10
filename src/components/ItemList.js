import React from 'react'

const ItemList = ({ items }) => {
    // console.log(items.card.ratings.aggregatedRating.rating)
    // const rating = items.card.info.ratings?.aggregatedRating?.rating;
    
    return (
        <div className='itemsContainer'>

            {items.map(item => <div key={item.card.info.id}>
                {/* const { ratings } = item.card.info; */}
                <div className='description'>
                    <div className='text'>
                        <p id='temp2'>{item.card.info.name}</p>
                        <p id='temp3'> ₹ {item.card.info.price / 100}</p>
                        <p id='temp4'>★ {item.card.info.ratings?.aggregatedRating?.rating || "No rating"}</p>
                        <p id='temp5'>{item.card.info.description}</p>
                        {/* <hr /> */}
                    </div>
                   
                    <div className='image'>
                            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' +
                                item.card.info.imageId} />
                                <button>Add+</button>
                        </div>
                        

                    
                </div>
            </div>)}
        </div>
    )
}

export default ItemList;