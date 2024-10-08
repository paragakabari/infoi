import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import ContectUs from './Component/ContectUs/ContectUs';
import PrivacyPolicy from './Component/PrivacyPolicy/PrivacyPolicy';
import TermsCondition from './Component/Terms & Condition/TermsCondition';
import Media from './Component/Media/Media';
import PageNotFound from './Component/PageNotFound/PageNotFound';
import SexHealth from './Component/SexHealth/SexHealth';
import Weapons from './Component/Weapons/Weapons';
import Messaging from './Component/Messaging/Messaging';
import Loan from './Component/Loan/Loan';
import CraditCard from './Component/CraditCard/CraditCard';
import Travel from './Component/Travel/Travel';
import Ai from './Component/Ai/Ai';
import Car from './Component/Car/Car';
import Emicalculator from './Component/Emicalculator/Emicalculator';
import Hybridcards from './Component/Hybridcards/Hybridcards';
import Happymodgames from './Component/Happymodgames/Happymodgames';
import Coldplay from './Component/Coldplay/Coldplay';
import HydrationDrinks from './Component/HydrationDrinks/HydrationDrinks';
import Beverages from './Component/Beverages/Beverages';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<ContectUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/media" element={<Media />} />
        <Route path="/sexhealth" element={<SexHealth />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/messaging" element={<Messaging />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/cradit-card" element={<CraditCard />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/ai" element={<Ai />} />
        <Route path="/car" element={<Car />} />
        <Route path="/emicalculator" element={<Emicalculator />} />
        <Route path="/hybridcards" element={<Hybridcards />} />
        <Route path="/happymodgames" element={<Happymodgames />} />
        <Route path="/coldplay" element={<Coldplay />} />
        <Route path="/hydration-drinks" element={<HydrationDrinks />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
