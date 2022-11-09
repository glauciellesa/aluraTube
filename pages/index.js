import config from "../config.json";
import CSSReset from "../components/CSSReset";
import Menu from "../components/Menu"
import Header from "../components/Header";
import Timeline from "../components/Timeline";

function HomePage() {
  return (
    <>
    <CSSReset />
      <div>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} />
      </div>
    </>
  );
}

export default HomePage;



