import axios from "axios";

export const getRestaurantList = async() => {
    const restaurant = await axios.get(`${process.env.REACT_APP_BASEURL}/list`)
    console.log({restaurantList : restaurant})
}