import React, { useEffect, useState } from 'react'

const RestaurantCards = ({ resData }) => {
    const { name, costForTwo, cuisines, sla, avgRating, cloudinaryImageId } = resData;

    return (
        <div className='cards'>

            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />

            <h4>{name}</h4>
            <h4 style={{ overflow: "hidden", maxWidth: " 250px", textOverflow: "ellipsis", whiteSpace: "nowrap", }}>{cuisines?.join(', ')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} ★</h4>
            <h4>{sla?.deliveryTime} mins</h4>
        </div>
    )
}


const Body = () => {
    let [listOfRestaurants, setListOfrestaurants] = useState([]);
    const [mindData, setMindData] = useState([]);
    const [sectionTitle, setSectionTitle] = useState('');

    useEffect(() => {
        apiFetched();
    }, []);

    const apiFetched = async () => {
        try {
            const url = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0760&lng=72.8777&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await url.json();
            setListOfrestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
            setMindData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || []);
            setSectionTitle(json?.data?.cards[1]?.card?.card?.header?.title || '');
            console.log("Section Title: ", json?.data?.cards[1]?.card?.card?.header?.title);
        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }

    }




    return (
        <div className='body'>

            <div className='mindDiv'>
                {
                    mindData.map((result, index) => (
                        <div key={result.id || index} className='mindCards'>
                            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/' + result.imageId} />
                            <h1>{result.title}</h1>
                        </div>
                    ))
                }
            </div>

            <hr/>
            <div className='title'>
                <h1 id='temp1'>{sectionTitle}</h1>
                 <div className='btnSection'>
                 <span>Find the Top Rated Restaurants Near you</span>
                 <button  onClick={() => {
                    setListOfrestaurants (listOfRestaurants.filter((res) => res.info.avgRating > 4.5)) 
                    console.log(listOfRestaurants)
                }}>Top Rated ★</button>
                 </div>
                {/* console.log(listOfRestaurants) */}
            </div>
            <div className='body-container'>
                {
                    listOfRestaurants.map((res) => (
                        <div key={res.info.id} className='cards-container'>
                            <RestaurantCards resData={res.info} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Body