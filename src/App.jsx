import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Title from './components/title'
import data from './data/data.js';
import './App.css'
import MediaCard from './components/employeecard.jsx';
import Container from '@mui/material/Container';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function App() {

  const [ShowInactive, setShowInactive] = useState(false);
  const filteredData = ShowInactive ? data.filter((employee) => employee.onLeave) : data;

  const handleToggle = (event) => {
    setShowInactive(event.target.checked);
    console.log(event.target.checked);
  }

  const [count, setCount] = useState(0)
  console.log(data[0].firstName);
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" component="h1">
        Employee Database
      </Typography>
      <Switch {...label} checked={ShowInactive} onClick={handleToggle} />
      <MediaCard employee={filteredData} />
    </Container>
  );
}

export default App