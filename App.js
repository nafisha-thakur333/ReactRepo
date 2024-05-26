import React from "react"
import ReactDOM from "react-dom/client"

/**
 * Header
 *  -Logo 
 *  -Nav items
 * Body
 *  -Search 
 *  -Restaurant container
 *    -Restaurant cards
 *      -img
 *      - Name of res, Start rating, cuisine,delivery time 
 * Footer 
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://i.pinimg.com/474x/59/5f/a5/595fa5ffb3d67f62ceabaa0d9a40d1e2.jpg"></img>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li> 
                <li>About Us</li> 
                <li>Contact Us</li> 
                <li>Cart</li> 
            </ul> 
        </div>
      </div>
    )
}


const RestaurantCard = (props) =>{
    const {resData} = props
    
    const {cloudinaryImageId,
         name, 
         avgRating,
         cuisines, 
         costForTwo,
         sla} = resData?.info;

    return (
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"}}>
            <img 
             className="res-logo"
             src = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
             alt = "res-logo"
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating + " stars"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

const resList = 
[
    {
    "info": {
      "id": "664061",
      "name": "Kwality Walls Shop",
      "cloudinaryImageId": "909daf097e30cd01d8fd121ddc6de2f6",
      "locality": "Gurdev Nagar",
      "areaName": "Model Town",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Ice Cream"
      ],
      "avgRating": 4.7,
      "veg": true,
      "parentId": "582",
      "avgRatingString": "4.7",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 27,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-24 23:57:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gurdev-nagar-model-town-ludhiana-664061",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "191828",
      "name": "Fire House Pizza",
      "cloudinaryImageId": "d491d871ef9c15a6b6fec8c30e35d0e0",
      "locality": "Pakhowal Road",
      "areaName": "Pakhowal Road",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Burgers"
      ],
      "avgRating": 4.3,
      "parentId": "79622",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-24 09:29:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Pizza.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Pizza.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/fire-house-pizza-pakhowal-road-ludhiana-191828",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "246661",
      "name": "Pandit Ji Di Hatti",
      "cloudinaryImageId": "zpobylf3euinjdua1mzm",
      "locality": "Ludhiana Junction",
      "areaName": "Ludhiana Junction",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian",
        "Continental"
      ],
      "avgRating": 4.4,
      "parentId": "154452",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 24,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-31 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pandit-ji-di-hatti-ludhiana-junction-ludhiana-246661",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "328627",
      "name": "Pizza By Jacks",
      "cloudinaryImageId": "ii0k0jhmq0kert5ro8dl",
      "locality": "Passi Nagar",
      "areaName": "Pakhowal Road",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Pastas"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "158406",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-24 10:29:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pizza-by-jacks-passi-nagar-pakhowal-road-ludhiana-328627",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "792952",
      "name": "Mama Mia Pizza",
      "cloudinaryImageId": "f1279ac524a9a0fd0544a259bd7c08bc",
      "locality": "Pakhowal Road",
      "areaName": "Dugri",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Pizzas",
        "Burgers",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "131084",
      "avgRatingString": "4.4",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 6.6,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "6.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-24 09:52:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "75% OFF",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/mama-mia-pizza-pakhowal-road-dugri-ludhiana-792952",
      "type": "WEBLINK"
    }
  }
]

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div> 
            <div className="res-container">
             {
             resList.map(restaurant => 
             <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
             )}
            </div>
        </div>
    )
}


const AppLayout = () => {
   return (
    <div className="app">
     {<Header/>}
     {<Body/>}
     


   </div>
   )
 }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);


