import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MindRestaurants = () => {
    const { resId } = useParams(); // This comes from the URL
    const [restaurantMindData, setRestaurantMindData] = useState([]);
    const [pageTitle, setPageTitle] = useState();
    useEffect(() => {
        fetchMenu();
    }, []);

    console.log("resId from URL:", resId);

 const fetchMenu = async () => {
    try {
        const response = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.875754&lng=75.3393195&collection=${resId}&tags=layout_CCS_Kebabs&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
        );
        const json = await response.json();

        const cards = json?.data?.cards;

        if (cards && Array.isArray(cards) && cards.length > 0) {
            // Optional: set page title if present
            const titleCard = cards.find((card) => card.card?.card?.title);
            setPageTitle(titleCard?.card?.card?.title || "Restaurant Collection");

            const restaurantCards = cards
                .filter(
                    (card) =>
                        card.card?.card?.["@type"] ===
                        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
                )
                .map((card) => card.card.card);

            setRestaurantMindData(restaurantCards);
        } else {
            console.warn("No cards found in response.");
            setRestaurantMindData([]);
            setPageTitle("No restaurants found");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        setPageTitle("Something went wrong");
    }
};



    return (
        <div className="collection-container">
            {
                restaurantMindData.map((res, index) => (
                    <div key={index}>
                       
                    </div>
                ))
            }
        </div>
    );
};

export default MindRestaurants;
