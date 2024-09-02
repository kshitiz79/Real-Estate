import "./App.css"
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Residencies from "./components/Residencies/Residencies";
import FeaturedProperties from "./components/FeaturedProperties/FeaturedProperties";
import Value from "./components/Value/Value";
import Owner from "./components/Owners/Owner";
import GetStarted from "./components/GetStarted/GetStarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
<Header/>
<Hero/>

<Companies/>
<Contact/>
<Residencies/>
<FeaturedProperties/>
<Value/>
<div class="sliding-background">

  <Owner />
</div>
<GetStarted/>
<Footer/>
    </div>
  );
}

export default App;
