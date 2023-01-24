
import './main.css'
import {Routes,Route} from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';


function MainCurrency() {
  return (
    <>
  
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/coins/:id" element={<Coinpage/>}/>
    </Routes>
    </>
  );
}

export default MainCurrency;
