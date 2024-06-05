import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const Title = () => (
  <img
    className="logo"
    src="https://static.vecteezy.com/system/resources/previews/028/338/773/original/vintage-illustration-deign-for-t-shirt-t-shirt-design-for-your-business-pod-business-western-cowboy-rodeo-vintage-car-logo-free-png.png"
  />
);

const Header = () => {
  return (
    <div className="header">
      {Title()}
      {}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
// burgerKing.cards.restaurants.info[0].name
const burgerKing = [
  {
    info: {
      id: "376734",
      name: "Pizza Studio",
      cloudinaryImageId: "yrarq6nluhnvspoeccsp",
      locality: "Old City",
      areaName: "Vivek Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Italian", "Chinese", "American"],
      avgRating: 3.6,
      veg: true,
      parentId: "8628",
      avgRatingString: "3.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-05 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "372000",
      name: "Indian Castle Gymkhana Club",
      cloudinaryImageId: "8a5ba3a50bf4757ad0c041bcf4572586",
      locality: "Vivek Nagar",
      areaName: "Kaithal Locality",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Chinese", "Beverages"],
      avgRating: 4.2,
      parentId: "106402",
      avgRatingString: "4.2",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-05 22:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/indian-castle-gymkhana-club-vivek-nagar-kaithal-locality-kaithal-372000",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "382784",
      name: "Burger Junction",
      cloudinaryImageId: "wnsbkzcjyajpc2a2hifb",
      locality: "Vivek Nagar",
      areaName: "Kaithal Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Pizzas", "Beverages"],
      avgRating: 4.3,
      parentId: "2748",
      avgRatingString: "4.3",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-05 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-junction-vivek-nagar-kaithal-locality-kaithal-382784",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "162126",
      name: "Sardar ji Da A-1 Dhaba",
      cloudinaryImageId: "b825e619650e63cb917d2e73cd6d9e97",
      locality: "Jail Road",
      areaName: "Dogra Gate Kaithal",
      costForTwo: "₹350 for two",
      cuisines: ["North Indian", "Thalis", "Beverages", "Salads", "Sweets"],
      avgRating: 4.3,
      veg: true,
      parentId: "178185",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-05 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
  {
    info: {
      id: "648241",
      name: "Shree Shyam Bikaner Restaurant & Misthan Bhandar",
      cloudinaryImageId: "72c5c7e4f3aef981d996be77d5302c96",
      locality: "Bahadur Colony",
      areaName: "Pehowa Chowk",
      costForTwo: "₹300 for two",
      cuisines: ["Fast Food", "South Indian"],
      avgRating: 4.1,
      veg: true,
      parentId: "433096",
      avgRatingString: "4.1",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-06-05 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "UPTO ₹40",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
  },
];

const RestrauntCard = ({
  name,
  cloudinaryImageId,
  locality,
  cuisines,
  avgRating,
}) => {
  //   console.log(restaurant);
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{locality}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating} Stars</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {burgerKing.map((restaurant) => {
        return <RestrauntCard {...restaurant.info} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h4>Footer</h4>;
};

const styleObj = {
  backgroundColor: "red",
};

const jsx = (
  <div style={styleObj}>
    <h1>JSX</h1>
    <h2>Second JSX</h2>
  </div>
);

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
