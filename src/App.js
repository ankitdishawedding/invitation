import Navigation from "./components/Navigation";
import Bridegroom from "./components/brideGroomDetails";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Organization from "./components/Organization";
import RSVP from "./components/RSVP";
import Seeyou from "./components/Seeyou";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import Where from "./components/Where";

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Organization />
        <Seeyou />
        <Where />
        <Footer />
        <div className="fixed bottom-0 w-full block md:hidden z-10">
          <Navigation />
        </div>
      </div>
    </>
  );
}

export default App;
