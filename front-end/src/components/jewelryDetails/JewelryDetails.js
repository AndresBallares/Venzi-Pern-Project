// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';


// const JewelryDetails = () => {
//     const URL = process.env.REACT_APP_API_URL;
//     const [piece, setPiece] = useState([]);
//     const { id } = useParams();

//     useEffect(() => {
//         axios
//         .get(`${URL}/jewelry/${id}`)
//         .then((response) => {
//             setPiece(response.data);
            
//         })
//     }, []);
//     const { name, category, description, price, image } = piece;
//     return (
        
//     <div>

//         <span>{image}</span>
//         <p>{name}</p>
//         <p>{category}</p>
//         <p>{description}</p>
//         <p>{price}</p>
        
        


//     </div>
// )
// }   
// export default JewelryDetails;
