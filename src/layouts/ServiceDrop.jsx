import React from 'react'
import { Menu, Dropdown, Button } from 'antd';

const ServiceDrop = () => {
    const menu = (
        <Menu>
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
        </Menu>
      );
  return (
    <Dropdown overlay={menu}>
       <div className="about-us-title">
                    <span>Services</span>{" "}
                    <img src={dropDownArrow.src} alt={dropDownArrow.src} />
                  </div>
    </Dropdown>
  )
}

export default ServiceDrop