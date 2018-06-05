import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from 'antd';
import './mainpage.css';
import Siderbar from './components/Siderbar/siderbar.js';
import Routes from './router.js';
const {Sider, Header, Content, Footer} = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header className='header'>
                        2782782
                    </Header>
                    <Layout>    
                        <Sider>    
                            <Siderbar/>
                        </Sider>
                        
                        <Content>
                            <div className='content'>
                            {this.props.children}
                            </div>
                        </Content>
                    </Layout>
                    <Footer className='footer'>
                        lynn
                    </Footer> 
                </Layout>
            </div>
        )
    }
}