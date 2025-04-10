import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';

const Menus = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    const [showIndex, setShowIndex] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.875754&lng=75.3393195&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        console.log("this is data" + data)
        const json = await data.json();
        setResInfo(json?.data);
        console.log("Full Menu JSON:", json);
    };

    if (!resInfo) return <h2 style={{ paddingTop: "120px" }}>Loading...</h2>;

    const { text } = resInfo?.cards?.[0]?.card?.card
    const { itemCards} = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    console.log(itemCards)
    const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));

    console.log(categories)

    const { name, avgRatingString, totalRatingsString, locality, cuisines, sla, costForTwoMessage } = resInfo.cards[2].card.card.info
    const offers = resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
    console.log("Offers:", offers);
    return (
        <div className='whole-container'>
            <div className='topperBox-container'>
                <div className='topperBox'>
                    <h1 id='temp12'>{ name}</h1>
                    <span id='temp11' className='TextOfTopperBox'> ★{avgRatingString} &nbsp;</span>
                    <span id='temp6' className='TextOfTopperBox'> ({totalRatingsString}) </span>
                    <span id='temp7' className='TextOfTopperBox'>  &nbsp; &#x25CF; &nbsp; ({costForTwoMessage})</span>
                    <p id='temp8' className='TextOfTopperBox'>{cuisines}</p>
                    <p id='temp9' className='TextOfTopperBox'> &#x25CF; &nbsp; Outlet &nbsp; <span style={{ color: "gray" }}>{locality}</span></p>
                    <p id='temp10' className='TextOfTopperBox'> &#x25CF; &nbsp; {sla.slaString}</p>
                </div>
            </div>
            <div className='menu-container'>
                {/* <h1>Deals For You</h1> */}
                <div className='carousal-div'>
                    {offers.map((offer, index) => (
                        
                        <div key={index} className='offer-card'>
                            <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic'/>
                            <p id='temp13'><span></span><strong>{offer.info.header}</strong></p>
                            <p id='temp14'>{offer.info.couponCode}</p>
                        </div>
                    ))}
                </div>



                {

                    // controlled component, its controlling its child//
                    categories.map((category, index) => <RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)} // -> this will set a new index on every click as it has been passed in the child as props
                    />)
                }
            </div>
        </div>
    );
};

export default Menus;
