import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateJewelry = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();
    const [piece, setPiece] = useState({
    image:"",
    name: "",
    category: "",
    description: "",
    price: "",
    });
    
    


    const handleOnChange = (event) => {
        setPiece({...piece, [event.target.id] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post(`${URL}/jewelry`, piece)
        .then(() => {
            navigate('/')
        });   
    } 

    console.log(piece)
    const { image, name, category, description, price,  } = piece;

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="image">image</label>
            <input 
            type="text" 
            value={image}
            id='image'
            onChange={handleOnChange}
            placeholder="image"
            />
            <br />

            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            value={name}
            id='name'
            onChange={handleOnChange}
            placeholder="name"
            />
            <br />

            <label htmlFor="category">Category</label>
            <input 
            type="text" 
            value={category}
            id='category'
            onChange={handleOnChange}
            placeholder="category"
            />
            <br />

            <label htmlFor="description">Description</label>
            <input 
            type="text" 
            value={description}
            id='description'
            onChange={handleOnChange}
            placeholder="description"

            />
            <br />

            <label htmlFor="price">price</label>
            <input 
            type="text" 
            value={price}
            id='price'
            onChange={handleOnChange}
            placeholder="price"

            />
            


            <button handleSubmit={handleSubmit}>Submit</button>
            

        </form>
)

};

export default CreateJewelry;

