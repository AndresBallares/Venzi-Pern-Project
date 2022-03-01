import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


const JewelryDetails = () => {
    const URL = process.env.REACT_APP_API_URL;
    const [piece, setPiece] = useState([]);
    const { id } = useParams();
    const Navigate = useNavigate();
    

    useEffect(() => {
        axios
        .get(`${URL}/jewelry/${id}`)
        .then((response) => {
            console.log(response.data)
            setPiece(response.data);
            
        })
    }, [URL, id]);

    const handleDelete = () => {
        axios.delete(`${URL}/jewelry/${id}`)
        .then( () => {
            Navigate("/");
        })
    }
    const { name, category, description, price, image } = piece;
    return (
        
    <article className='details'>

        <div>
            <img src={`${image}`} alt={name} />
        </div>
        <p>{name}</p>
        <p>{category}</p>
        <p>{description}</p>
        <p>${price}</p>
        
        <Link to={`/jewelry/${id}/edit`}>
            <button>Edit</button>
        </Link>

        <Link to={`/`}>
            <button>Back</button>
        </Link>

        <button onClick={handleDelete}>Delete</button>
        


    </article>
)
}   
export default JewelryDetails;
