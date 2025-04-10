import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const RestaurantCards = ({ resData }) => {
    const { name, costForTwo, cuisines, sla, avgRating, cloudinaryImageId, areaName } = resData;

    return (
        <div className='cards'>
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
            <h4 className="card-text temp">{name}</h4>
            <span className="card-text temp"> ★{avgRating} </span> &nbsp;| <span className="card-text temp">{sla?.slaString} </span>
            <h4 className="card-text  " style={{color:"gray", overflow: "hidden", maxWidth: "250px", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {cuisines?.join(', ')}
            </h4>
            {/* <h4 className="card-text">{costForTwo}</h4> */}
            
            <h4 className="card-text temp" style={{color:"gray"}}><span className="card-text temp">Address : </span>{areaName}</h4>
        </div>
    );
};

const MoreResCards = ({ resData }) => {
    const { name, costForTwo, cuisines, sla, avgRating, cloudinaryImageId } = resData;
    return (
        <div className='cards'>
            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + cloudinaryImageId} />
            <h4 className="card-text">{name}</h4>
            <h4 className="card-text" style={{ overflow: "hidden", maxWidth: "250px", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {cuisines?.join(', ')}
            </h4>
            <h4 className="card-text">{costForTwo}</h4>
            <h4 className="card-text">{ } ★</h4>
            <h4 className="card-text">{sla?.deliveryTime} mins</h4>

        </div>
    )
}
const Body = () => {
    const [listOfRestaurants, setListOfrestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [mindData, setMindData] = useState([]);
    const [sectionTitle, setSectionTitle] = useState('');
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        apiFetched();
    }, []);

    const apiFetched = async () => {
        try {
            const url = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.875754&lng=75.3393195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await url.json();

            const restaurantList = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            const mindList = json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
            console.log(json);
            setListOfrestaurants(restaurantList);
            setFilteredRestaurants(restaurantList);
            setMindData(mindList);
            setSectionTitle(json?.data?.cards[1]?.card?.card?.header?.title || '');

        } catch (error) {
            console.error("Failed to fetch restaurants:", error);
        }
    };

    const handleSearch = () => {
        const filtered = listOfRestaurants.filter((res) =>
            res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurants(filtered);
    };

    return (
        <div className='body'>
            <div className='mindDiv'>
                {mindData.map((result, index) => (
                    <div key={result.id || index} className='mindCards'>
                       
                            <img
                                src={
                                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/' +
                                    result.imageId
                                }
                                alt={result.title}
                            />
                        
                        <h1>{result.title}</h1>

                    </div>
                ))}
            </div>

            <hr />
            <div className='title'>
                <h1 id='temp1'>{sectionTitle}</h1>

                {/* ✅ Search Box */}
                <div className='btnSection'>
                    <input
                        id='searchId'
                        type='text'
                        placeholder='Search'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <span>
                        <button onClick={() => { handleSearch(); }}>
                            <SearchIcon />
                        </button>
                    </span>
                </div>
            </div>

            <div className='body-container'>
                {filteredRestaurants.map((res) => (
                    <div key={res.info.id} className='cards-container'>
                        <Link to={`/restaurant/${res.info.id}`}>
                            <RestaurantCards resData={res.info} />
                            
                        </Link>
                    </div>
                ))}
                
            </div>


<div>
<Footer/>
</div>

        </div>
    );
};

export default Body;
