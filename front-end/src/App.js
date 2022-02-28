import { Routes, Route } from 'react-router-dom';
import Nav from './components/nabBar/Nav.js';
import Home from './components/home/Home.js';
import CreateJewelry from './components/createJewelry/CreateJewelry.js';
import JewelryDetails from './components/jewelryDetails/JewelryDetails.js';
import JewelryEdit from './components/editJewelry/JewelryEdit.js';


function App() {
    return (
    <div className='App'>
        
            <Nav />
            <main className='body'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/CreateJewelry" element={<CreateJewelry />} /> */}
                    {/* <Route path="/JewelryDetails/:id" element={<JewelryDetails />} /> */}
                    {/* <Route path="/Jewelry/:id/edit" element={<JewelryEdit />} /> */}
                </Routes>
            </main>


    </div>
    )
};

export default App;