import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item style={{ backgroundColor: '#10111d' }} key="mail">
      <a style={{color: 'white'}} href="/">Home</a>
    </Menu.Item>
    <SubMenu  style={{ backgroundColor: '#10111d', color: 'white'}} title={<span>More</span>}>
      <MenuItemGroup style={{ backgroundColor: '#10111d', color: 'white', borderRadius: '4px'}} title={<span style={{color: 'white'}}>For Diet</span>}>
        <Menu.Item key="setting:1">Diet Calculator</Menu.Item>
        <Menu.Item key="setting:2">Diets</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup style={{ backgroundColor: '#10111d', color: 'white', borderRadius: '4px'}} title={<span style={{color: 'white'}}>For Sport</span>}>
        <Menu.Item key="setting:3">Sport Exercises</Menu.Item>
        <Menu.Item key="setting:4">Forum</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
  )
}

export default LeftMenu