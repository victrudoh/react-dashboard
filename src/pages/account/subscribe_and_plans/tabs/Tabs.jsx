import React from 'react'

import { Row, Underline, Button } from "./Tabs.Styles";

const TABS = ["Subcribes", "Minutes"];

const Tabs = ({ active, setActive }) => {
  return (
    <Row>
        <Underline active={active} />
        {TABS.map((tab, index) => (
            <Button active={active === index} onClick={() => setActive(index)}>
                {tab}
            </Button>
        ))}
    </Row>
  )
}

export default Tabs