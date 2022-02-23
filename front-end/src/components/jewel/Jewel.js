import { Link } from "react-router-dom";

function Jewel({ element }) {
    return (
    <tr>
        <td>
        <img src="file:///Users/maurolozano/Pictures/Photos%20Library.photoslibrary/private/com.apple.Photos" alt="jewelry" />
        </td>    
    
        <td>
            <Link to={'/JewelryDetails/:id '}>{element.name}</Link>
        </td>   
    
    
        <td>
            {element.description}
        </td>
    
        <td>
            {element.price}
        </td>
    
    {/* <td>
        <Link to={`/jewelry/${id}`}>
        <button type="button" class="btn btn-outline-info">Add to Cart</button>
        </Link>

    </td> */}
    </tr>
    );
}

export default Jewel;