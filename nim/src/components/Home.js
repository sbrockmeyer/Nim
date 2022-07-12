import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

function Home() {
  return (
    <div>
      <h1>NIM</h1>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">the rules</Dropdown.Item>        
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default Home