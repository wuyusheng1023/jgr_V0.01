import './App.css';
import 'antd/dist/antd.css'

import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ParamForm from './components/ParamsForm'

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={20} offset={2} >
          header
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          <ParamForm/>
        </Col>
      </Row>
      <Row>
        <Col span={5} offset={2}>
          sider
        </Col>
        <Col span={15} offset={0}>
          contene
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2}>
          footer
        </Col>
      </Row>
    </div>
  );
}

export default App;
