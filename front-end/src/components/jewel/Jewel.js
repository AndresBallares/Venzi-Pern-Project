import { Link } from "react-router-dom";

function Jewel({ piece }) {
    return (
    <div className="piece">
        <div>
        <img src="https://imgs-s1.jewelryimages.net/vendor-jewelry-images/galleries/colormerchants/1x1/RM1503-07.jpg?v=14" alt="jewelry" />
        </div>    
    
        <p>
            {piece.name}
        </p>   
    
    
        <p>
            {piece.description}
        </p>
    
        <p>
            ${piece.price}
        </p>
    
        <div>
            <Link to={`/jewelry/${piece.id}`}>
            <button type="button" class="btn btn-outline-info">See Details</button>
            </Link>

        </div>
    </div>
    );
}

export default Jewel;