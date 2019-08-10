import React from 'react'
import './App.css'

import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Colors } from './components';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="App-name">
            Colors
          </div>
        </Header>
        <Content className="Content">
          <div className="Content-wrapper">
            <Colors />
          </div>
        </Content>
        <Footer className="Footer">
          &copy;2019&nbsp;Sergey Sokurenko
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
