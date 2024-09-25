import React from 'react';
import ReactDOM from 'react-dom/client';
/**
    * Header
      - Logo
      - Nav Items ( Right Side )
      - Cart
    *  body
      *  Search Bar
      * restaurent List 
          * Restaurent Card
            * Image 
            * Name
            * Rating
            * Cusines
    *  footer  
      - Links
      - Copyright
    */
const Title = ()=>
( 
 <a href="/">
 <img 
className='logo'
src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg" 
alt="Food Vanilla"
/> 
</a>
);

function Header(){
  return (
  <div className='header'>
    <Title/>
   <div className='nav-items'>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li> Contact</li>
      <li>Cart</li>
    </ul>
   </div>
  </div>
  );
};

// config driven UI

const restaurantList = [
  {
    type: "restaurant",
    data:
    {
      image:"https://t4.ftcdn.net/jpg/03/21/32/45/360_F_321324549_3utrdpZOFdsyUElymaPhm5LXRyTpnteh.jpg",
      name: "burger",
      cuisines: ["america","burger"],
      lastMileTravelString: 10,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data:
    {
      image:"https://thumbs.dreamstime.com/b/wide-popcorn-13503390.jpg",
      name: "pop corn",
      cuisines: ["america","pop corn"],
      lastMileTravelString: 5,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data:
    {
      image:"https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg",
      name: "pizza",
      cuisines: ["america","pizza"],
      lastMileTravelString: 11,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data:
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXymVQ_byAHFE1uV6vUCbOaKMIoZY13f0gA4p931GInw&s",
      name: "KFC",
      cuisines: ["america","KFC"],
      lastMileTravelString: 20,
    },
    subtype: "basic",
  },
];
console.log("data",restaurantList[0].data?.image);
// const burgerKing = {
//   name : 'Burger King',
//   image: 'https://assets-global.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png',
//   cusines: ["Burger", "American"],
//   rating: "4.2",
// }
//passing props
const RestroCard = (props)=>{
  if (!props.restaurant || !props.restaurant.data) {
    console.log("porps");
    // Handle case when props.restaurant or props.restaurant.data is undefined
    return null; // or some default UI indicating that data is unavailable
  }
  console.log(props);
  return (
    <div className='card'> 
      <img src={props.restaurant.data?.image} alt='' />
      <h2>{props.restaurant.data?.name}</h2>
      <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
    </div>
  );  
}
const Body = () =>
{
  return (
    <div className='restrau-list'>
      <RestroCard restaurant = { restaurantList[0] }/>
      <RestroCard restaurant = { restaurantList[1] }/>
      <RestroCard restaurant = { restaurantList[2] }/>
      <RestroCard restaurant = { restaurantList[3] }/>
      <RestroCard restaurant = { restaurantList[4] }/>
      <RestroCard restaurant = { restaurantList[1] }/>
      <RestroCard restaurant = { restaurantList[2] }/>
      <RestroCard restaurant = { restaurantList[0] }/>
      <RestroCard restaurant = { restaurantList[1] }/>
      <RestroCard restaurant = { restaurantList[2] }/>
      <RestroCard restaurant = { restaurantList[3] }/>
      <RestroCard restaurant = { restaurantList[4] }/>
      <RestroCard restaurant = { restaurantList[1] }/>
      <RestroCard restaurant = { restaurantList[2] }/>
      <RestroCard restaurant = { restaurantList[4] }/>
      <RestroCard restaurant = { restaurantList[1] }/>
      <RestroCard restaurant = { restaurantList[2] }/>
    </div>
    
  )
};
const Footer = ()=>
{
  return <h4>Footer</h4>
};
// JSX should only have one parent element
// React elements can only be rendered as part of a single parent element in the component's return. 
// This is because a React component must return a single React element
// If i want more elements then we need to use div. if we don't want to use div then we have another option such as react.fragment
//React fragment- React.fragment is a component which is exported by this react 
// React.fragment is like an empty tag.
// for this we can write all the tags inside the <React.Fragment>all the tags here</React.Fragment>
//  * But when we write react.fragment the code looks ugly and the react mentioned just to write only the empty tags like
// <>all the tags here</> - this is basically an empty tag but this is known s react.fragment 
//  The above is basically shorthand for React.Fragment
const AppLayout = () =>
{
  return (
    <> 
    <Header/>
    <Body/>
    <Footer/>
    </>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);