import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title'
import data from './data/data.js';
import './App.css'
import MediaCard from './components/employeecard.jsx';
import Container from '@mui/material/Container';


function App() {
  const [count, setCount] = useState(0)
  console.log(data[0].firstName);
  return (
    <Container fixed>
    <MediaCard employee={data} />
    </Container>
  )
}

export default App
