// import React from 'react';
// import axios from 'axios';
// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// const CreateJewelry = () => {
//     const URL = process.env.REACT_APP_API_URL;
//     const navigate = useNavigate();
//     const { id } = useParams();
//     const [piece, setPiece] = useState({
//     image:"",
//     name: "",
//     category: "",
//     description: "",
//     price: "",
//     });
    
    


//     const handleOnChange = (event) => {
//         setPiece({...piece, [event.target.id] : event.target.value})
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         axios
//         .post(`${URL}/jewelry`, piece)
//         .then(() => navigate('/jewelry'));   
//     } 

//     console.log(piece)
//     const { image, name, category, description, price,  } = piece;

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="image">image</label>
//             {/* <input 
//             type="image" 
//             value={image}
//             id='image'
//             onChange={handleOnChange}
//             />
//             <br /> */}

//             <label htmlFor="name">Name</label>
//             <input 
//             type="text" 
//             value={name}
//             id='name'
//             onChange={handleOnChange}

//             />
//             <br />

//             <label htmlFor="category">category</label>
//             <input 
//             type="text" 
//             value={category}
//             id='category'
//             onChange={handleOnChange}
//             />
//             <br />

//             <label htmlFor="description">description</label>
//             <input 
//             type="text" 
//             value={description}
//             id='description'
//             onChange={handleOnChange}

//             />
//             <br />

//             <label htmlFor="price">price</label>
//             <input 
//             type="text" 
//             value={price}
//             id='price'
//             onChange={handleOnChange}

//             />
//             <br />


//             <input type="submit" value="submit" />
//             <input type="submit" value="nevermind" onClick={() => navigate('/jewelry')} />

//         </form>
// )

// };

// export default CreateJewelry;

