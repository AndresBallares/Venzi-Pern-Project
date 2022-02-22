import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Nav from './components/navBar/Nav';
import Home from './components/home/Home';
import CreateJewelry from './components/createJewelry/CreateJewelry';
import JewelryDetails from './components/JewelryDetails/JewelryDetails';
import JewelryEdit from './components/jewelryEdit/JewelryEdit';


function App() {
    return (
    <div className='App'>
        
            <Nav />
            <main className='body'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/CreateJewelry" element={<CreateJewelry />} />
                    <Route path="/JewelryDetails/:id" element={<JewelryDetails />} />
                    <Route path="/transaction/:id/edit" element={<JewelryEdit />} />
                </Routes>
            </main>


    </div>
    )
};

export default App;