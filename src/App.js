import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import Header from './Components/Header';
import Todo from "./Components/Todo";
import Footer from "./Components/Footer";
import './App.css';

function App() {
  return (
   <React.Fragment>
    <Header/>
    <Todo/>
    <Footer/>
   </React.Fragment>
  );
}

export default App;
