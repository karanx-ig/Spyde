import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView";
import Counter from "./Counter";
import Navbar from "./Navbar";
import Home from "./sample";
import store from "./Store";
import { Provider } from "react-redux";
import ProfileCard from "./ProfileCard";
const profileLst = {
  name:"Karan",
  Department: "AI",
  year: 2,
  mobile: 7868969968,
  address: "Spyderverse",
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={< Home/>} />
        <Route path="/profilecard" element={<ProfileCard profileLst={profileLst} />} />
        <Route path="/gridview" element={<GridView />} />
        <Route path="/counter" element={<Provider store={store}><Counter /></Provider>} /> 
        <Route path="/counter" element={<Counter />} />

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;