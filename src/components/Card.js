import React, { useEffect, useState } from 'react';
import { getRestaurantList } from '../api';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Card() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const result = await getRestaurantList();
        console.log("Fetched restaurants:", result); // Log hasil untuk debugging
        if (result && Array.isArray(result.restaurants)) {
          setRestaurantList(result.restaurants); // Ambil array dari properti 'restaurants'
        } else {
          console.error("Expected an array but got:", result);
          setRestaurantList([]); // Atur ke array kosong jika hasil tidak valid
        }
      } catch (error) {
        console.error("Error fetching restaurant list:", error);
        setRestaurantList([]); // Atur ke array kosong jika terjadi kesalahan
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <Container>
      <Row>
        {restaurantList.length > 0 ? (
          restaurantList.map((restaurant) => (
            <Col sm={6} md={4}  key={restaurant.id }>
              <div className='p-2'>
                <img src={`${process.env.REACT_APP_BASEIMGURL}/small/${restaurant.pictureId}`} alt={restaurant.name} className='h-90'/>
                <div>{restaurant.name}</div>
                <div>{restaurant.description}</div>
                <div>Rating: {restaurant.rating}</div>
                <div>City: {restaurant.city}</div>
                <Button>Testing</Button>
              </div>

            </Col>
          ))
        ) : (
          <p>No restaurants found.</p>
        )}
      </Row>
    </Container>
  );
}

export default Card;