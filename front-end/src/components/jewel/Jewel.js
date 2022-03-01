import { Link } from "react-router-dom";

function Jewel({ piece }) {
    return (
    <div className="piece">
        <div>
        <img src={piece.image} alt={piece.name} />
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