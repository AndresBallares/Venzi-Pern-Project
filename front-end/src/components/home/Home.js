import { useEffect, useState } from "react";
import axios from "axios";
import Jewel from "../jewel/Jewel";

function Home () {
    const URL = process.env.REACT_APP_API_URL;
    const [piece, setPiece] = useState([]);
    

    useEffect(async () => {
        await axios
        .get(`${URL}/jewelry`)
        .then((response) => {
            console.log(response.data);
            setPiece(response.data);

        })
    }, [URL]);


        return (
            <div className="display">

                    
                    
                            {piece.map((element) => {
                            return <Jewel key={element.id} piece={element}  /> })}
                        
                    

            </div>
        )
    
}

export default Home;