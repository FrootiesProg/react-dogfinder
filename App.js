import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Home from "./Home";
import "./App.css";

const dogs = [
  {
    name: "Whiskey",
    age: 5,
    breed: "Golden Retriever",
    image: "/whiskey.jpg", // Use the absolute path to your image
    facts: [
      "Whiskey loves eating popcorn.",
      "Whiskey is a terrible guard dog.",
      "Whiskey wants to cuddle with you!",
    ],
  },
  {
    name: "Duke",
    age: 3,
    breed: "Australian Shepherd",
    image: "/duke.jpg", // Use the absolute path to your image
    facts: [
      "Duke believes that ball is life.",
      "Duke likes snow.",
      "Duke enjoys pawing other dogs.",
    ],
  },
  {
    name: "Perry",
    age: 4,
    breed: "Labrador Retriever",
    image: "/perry.jpg", // Use the absolute path to your image
    facts: [
      "Perry loves all humans.",
      "Perry demolishes all snacks.",
      "Perry hates the rain.",
    ],
  },
  {
    name: "Tubby",
    age: 4,
    breed: "Bulldog",
    image: "/tubby.jpg", // Use the absolute path to your image
    facts: [
      "Tubby is really stupid.",
      "Tubby does not like walks.",
      "Angelina used to hate Tubby, but claims not to anymore.",
    ],
  },
];


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs} />} />
          <Route path="/dogs" element={<DogList dogs={dogs} />} />
          <Route path="*" element={<h2>Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
