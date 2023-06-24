import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Details from "./Page/Details";
import ActorDetails from "./Page/ActorDetails";

function App() {
  return (
    <div className="">
        <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/topRated'} element={<TopRated/>}/>
            <Route path={'/movie/details/:movieId'} element={<Details/>}/>
            <Route path={'/movie/details/actor/:actorId'} element={<ActorDetails/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
