
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Aboutus_pg from './Components/Aboutus_pg';
import Portfolio_pg from './Components/Portfolio_pg';
import Test_pg from './Components/Test_pg';
import Contact_pg from './Components/Contact_pg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      
     

<Router>
<Navbar/>
  <Routes>
  <Route index element={<Home />} />
          <Route path="aboutus" element={<Aboutus_pg />} />
          <Route path="portfolio" element={<Portfolio_pg />} />
          <Route path="test" element={<Test_pg />} />
          <Route path="contact" element={<Contact_pg />} />

  </Routes>
</Router>
<Footer/>

    </div>
  );
}

export default App;
