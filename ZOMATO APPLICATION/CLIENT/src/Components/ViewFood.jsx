 



// get payment=

// pk_test_51P4JgWSEtZ1gRrOPUB3FbZRKjrhnG2rVQS6ALUDSizlv2edwjW3T91x3zNGdCh8B7UXKNtGmeuGYvJHkSUd1lstw00hO8vfQie

// screct payment=	

// sk_test_51P4JgWSEtZ1gRrOP6mKPAXwq3kjmB5tNWBNd744Uhq9rXDPSDjMvnQQJCOEV8QaEOsEg6XNA1kCTkvM3K8lwNC3k00NAYTPVA4



//------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ViewFood.css'; // Import the CSS file+
const ViewFood = () => {
  const navigate = useNavigate();
  const { restroId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [ratings, setRatings] = useState({});

  useEffect(() => {
    async function showProduct() {
      try {
        const restaurantResponse = await axios.get(`http://localhost:7000/restro/${restroId}`);
        setRestaurant(restaurantResponse.data);

        const productResponse = await axios.get('http://localhost:7000/product');
        console.log(productResponse.data,"sdhfvuwyfweugudgeweudgwuyfgwygfuy");
        // const filteredProducts = productResponse.data.filter(p => p.restaurant === restroId);

        setProducts(productResponse.data);

        // Fetch all ratings
        // const ratingsResponse = await axios.get('http://localhost:7000/api/rating');
        // const ratingsMap = {};
        // ratingsResponse.data.forEach(rating => {
        //   ratingsMap[rating.productId] = rating.rating;
        // });
        // setRatings(ratingsMap);

      } catch (error)
       {
         console.error('Error fetching products:', error);
      }
    }

    showProduct();
  }, []);

  const handleplus = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);
    setProducts(updatedProduct);

    const productToAdd = { ...products[id] };
    setCart([...cart.filter(item => item._id !== productToAdd._id), productToAdd]);
    calculateTotalPrice();
  };

  const handleminus = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = Math.max(((updatedProduct[id].quantity || 0) - 1), 0);
    setProducts(updatedProduct);

    const productToRemove = { ...products[id] };
    setCart(cart.filter(item => item._id !== productToRemove._id));
    calculateTotalPrice();
  };

  const calculateTotalPrice = () => {
    const totalPrice = products.reduce((acc, curr) => {
      return acc + (curr.price || 0) * (curr.quantity || 0);
    }, 0);
    setTotalPrice(totalPrice);
  };

  const addProductToCart = (id) => {
    let updatedProduct = [...products];
    updatedProduct[id].quantity = ((updatedProduct[id].quantity || 0) + 1);;
    setProducts(updatedProduct);

    const productToAdd = { ...products[id]};
    setCart([...cart, productToAdd]);
    calculateTotalPrice();

  };

  const viewCart = () => {
    navigate(`/viewCart/${restroId}`, { state: { cart, totalPrice, restaurant } });
  };

  const addProduct = () => {
    navigate(`/view/${restroId}/addproduct`);
  };

  return (
    <>
  <div id='parent' className=' '>
        <div className='button_cart mb-5'>
          <button onClick={addProduct}> add product</button>
          <button onClick={viewCart}>
            View Cart ({cart.length})
          </button>
        </div>
        <div>
          <img id='restroImage' src={restaurant.image} alt='Restaurant' />
          <h4>{restaurant.name}</h4>
        </div>
        <div className='row'>
          {products.map((data, id) => (
            <div key={id} id='product' className='col-lg-4'>
              <img id='productImage' src={data.image} alt='Product' />
              <div id='product_name'>
                <h2>{data.name}</h2>
                <h1>{data.price}</h1>
              </div>
              <div id='quanity_button'>
                <p id='quantity'>Quantity: {data.quantity || 0}</p>
                {!data.quantity ? (
                  <button onClick={() => addProductToCart(id)}>Add</button>
                ) : (
                  <>
                    <button onClick={() => handleplus(id)}>+</button>
                    <button onClick={() => handleminus(id)}>-</button>
                  </>
                )}
              </div>
              <p>Total Price: {data.price * (data.quantity || 0)}</p>
              {/* <p>Rating: {ratings[data._id]}</p> Display the rating for each product */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewFood;