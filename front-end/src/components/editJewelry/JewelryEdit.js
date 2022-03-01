import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const JewelryEdit = () => {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const { id } = useParams();
    const [piece, setPiece] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        image: "",
    });


    useEffect(() => {
        axios
        .get(`${URL}/jewelry/${id}`)
        .then((response) => {
            setPiece(response.data);
            
        })
    }, []);
    
    const handleOnChange = (event) => {
        setPiece({...piece, [event.target.id] : event.target.value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .put(`${URL}/jewelry/${id}`, piece)
        .then(() => navigate('/'));
    }

    console.log(piece)
    const { name, category, description, price, image, } = piece;

    return (
        <form  className="form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name">Name</label>
            <br />
            <input 
            type="text" 
            value={name}
            id='name'
            onChange={handleOnChange}
            />
            </div>
            
            <div>
            <label htmlFor="category">Category</label>
            <br />
            <input 
            type="text" 
            value={category}
            id='category'
            onChange={handleOnChange}
            />
            </div>
            
            <div>
            <label htmlFor="description">Description</label>
            <br />
            <input 
            type="text" 
            value={description}
            id='description'
            onChange={handleOnChange}           
            />
            </div>

            <div>
            <label htmlFor="price">Price</label>
            <br />
            <input 
            type="text" 
            value={price}
            id='price'
            onChange={handleOnChange}
            />
            </div>

            <div>
            <label htmlFor="image">image</label>
            <br />
            <input 
            type="image" 
            value={image}
            id='image'
            onChange={handleOnChange}
            />
            </div>
            <br />
            <input className="bottom" type="submit" value="Submit" />
            <input className="bottom" type="submit" value="Nevermind" onClick={() => navigate('/')} />

        </form>
)

};

export default JewelryEdit;
