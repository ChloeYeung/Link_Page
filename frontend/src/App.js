// import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import ShowNavbar from './Components/ShowNavbar';
import LinkDetail from './Components/LinkDetail';
import Home from './Pages/Home';
import LinkList from './Pages/LinkList';
import Error from './Pages/Error';
import Profile from './Pages/Profile';
import PokeAPI from './Components/PokeAPI';

function App() {
  return (
    <div className="App">
      <ShowNavbar />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="profile" element={<Profile />} >
            <Route path="api" element={<PokeAPI />} />
          </Route>
        </Route>
        <Route path="link" element={<LinkList />} >
          <Route path=":id" element={<LinkDetail />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
