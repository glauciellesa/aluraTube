import config from "../config.json";
import CSSReset from "../src/components/CSSReset";
import Menu from "../src/components/Menu"
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import Timeline from "../src/components/Timeline";
import Favorites from "../src/components/Favorites";

function HomePage() {
  return (
    <>
    <CSSReset />
      <div>
        <Menu />
        <Banner />
        <Header />
        <Timeline playlists={config.playlists} />
        <Favorites favorites={config.favorites}/>
      </div>
    </>
  );
}

export default HomePage;



