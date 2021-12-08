import './index.css';
import Banner from './layout/Banner';
import NavBar from './layout/Navbar';
import Row from './components/Row';
import Footer from './layout/Footer';
import api from './api';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Modal />

      <Banner />

      <Row
        className="title-rows"
        title="Neoflix Originals"
        url={api.getNetflixOriginals} isPoster
      />

      <Row
        className="title-rows"
        title="New Releases"
        url={api.getNetflixLatest}
      />

      <Row
        className="title-rows"
        title="Trending Now"
        url={api.getTrending}
      />

      <Row
        className="title-rows"
        title="Action"
        url={api.getActionMovies}
      />

      <Row
        className="title-rows"
        title="Comedy"
        url={api.getComedyMovies}
      />

      <Row
        className="title-rows"
        title="Romance"
        url={api.getRomanceMovies}
      />

      <Row
        className="title-rows"
        title="Horror"
        url={api.getHorrorMovies}
      />

      <Footer />
    </div>
  );
}

export default App;

