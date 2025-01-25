import axios from "axios";

const baseUrl = process.env.REACT_APP_BASEURL

export const getRestaurantList = async() => {
    const restaurant = await axios.get(`${baseUrl}/list`)
    return restaurant.data
}
