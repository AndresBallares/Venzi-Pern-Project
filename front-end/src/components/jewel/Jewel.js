import { Link } from "react-router-dom";

function Jewel({ piece }) {
    return (
    <div className="piece">
        <div>
        <img src="https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/colormerchants/1x1/RM1503-07.jpg?v=14" alt="jewelry" />
        </div>    
    
        <p>
            <Link to={'/Jewelry/${piece.id}'}>{piece.name}</Link>
        </p>   
    
    
        <p>
            {piece.description}
        </p>
    
        <p>
            ${piece.price}
        </p>
    
        <div>
            <Link to={`/jewelry/${piece.id}`}>
            <button type="button" class="btn btn-outline-info">Add to Cart</button>
            </Link>

        </div>
    </div>
    );
}

export default Jewel;