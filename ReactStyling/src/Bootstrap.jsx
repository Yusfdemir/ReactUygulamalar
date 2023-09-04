import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css' // import edilmesi lazım
import { Button,Tab,Tabs } from 'react-bootstrap'
const Bootstrap = () => {
  return (
    <div>
        <h3>Bootstarp Component</h3>
        <Button>React Bootstrap button</Button>
        <Button variant='success'>React Bootstrap button</Button>
    <hr />
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
        <Tab eventKey="home" title="Home">
            Tab content for Home
        </Tab>
        <Tab eventKey="profile" title="Profile">
            Tab content for Profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            Tab content for Contact
        </Tab>
    </Tabs>
    </div>
  )
}

export default Bootstrap