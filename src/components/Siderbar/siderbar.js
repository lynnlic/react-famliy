import React from 'react';
import ReactDOM from "react-dom";
import {Menu} from 'antd';
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from '../../pages/Home/Home.js';
import Page1 from '../../pages/Page1/Page1.js';

const SubMenu = Menu.SubMenu;

export default class Siderbar extends React.Component {
    render() {
        return (
            <div>
                <Menu 
                    mode='inline'
                >
                    <Menu.Item key='1'>主菜单</Menu.Item>
                    <SubMenu key='2' title='子菜单'>
                        <Menu.Item key='3'><Link to='/home'>首页</Link></Menu.Item>
                        <Menu.Item key='4'><Link to='/page1'>Page1</Link></Menu.Item>
                    </SubMenu>
                </Menu>

 
            </div>
        )
    }
}