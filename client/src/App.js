import React from 'react';
import List from './components/List';
const images = require("../../public/assets/pictures")
const feProjects = [
  {
    id: 1,
    name: 'RunBuddy',
    image: images("capture.jpg")
  },
  {
    id: 2,
    name: 'DemoPortfolio',
    image: "./client/public/assets/pictures/passwordGenerator.JPG"
  },
  {
    id: 3,
    name: 'Password Generator',
    image: images
  },
  {
    id: 4,
    name: 'Coding quiz game',
    image: images
  },
  {
    id: 5,
    name: 'Crypto Maestro',
    image: images
  }
];
const beProjects = [
    {
      id: 1,
      name: 'ReadMe Generator',
      image: images
    },
    {
      id: 2,
      name: 'Portfolio Generator',
      image: images
    },
    {
      id: 3,
      name: 'Team Profile Generator',
      image: images
    },
    {
      id: 4,
      name: 'E-commerce Back End',
      image: images
    },
    {
      id: 5,
      name: 'Tech Blog',
      image: images
    }
  ];
  const fsProjects = [
    {
      id: 1,
      name: 'Note Taker',
      image: images
    },
    {
      id: 2,
      name: 'Pharmappoint',
      image: images
    },
    {
      id: 3,
      name: 'Team Profile Generator',
      image: images
    },
  
  ];

function App() {
  return (<List feProjects={feProjects} />, <List beProjects = {beProjects}/>, <List fsProjects = {fsProjects}/>);
}

export default App;
