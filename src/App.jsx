import { useState, useEffect } from "react";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Perks } from "./components/perks";
import { Treasury } from "./components/treasury";
import { Parity } from "./components/parity";
import { Roadmap } from "./components/roadmap";
import { Team } from "./components/team";
import { Faq } from "./components/faq";
import { Footer } from "./components/footer";
import { Info } from "./components/info";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import "./assets/scss/custom.scss";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation data={landingPageData.NAVIGATION}/>
      <Home data={landingPageData.HOME} />
      <About data={landingPageData.ABOUT} />
      <Perks data={landingPageData.PERKS} />
      <Treasury data={landingPageData.TREASURY} />
      <Parity data={landingPageData.PARITY} />
      <Roadmap data={landingPageData.ROADMAP} />
      <Team data={landingPageData.TEAM} />
      <Faq data={landingPageData.FAQ} />
      <Footer data={landingPageData.NAVIGATION} />
      <Info />
    </>
  );
};

export default App;
