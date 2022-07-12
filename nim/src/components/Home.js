import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Home() {
  return (
<<<<<<< Updated upstream
    <div>Home
      <button onClick={toggleGameRunning}>play </button>
=======
    <div>
      <h1>NIM</h1>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
>>>>>>> Stashed changes
    </div>
  )
}

export default Home