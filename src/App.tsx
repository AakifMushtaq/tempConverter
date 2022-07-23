import { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Input,
  CardBody,
  Card,
  CardTitle,
  Label,
  FormGroup,
  Alert,
  Dropdown,
  DropdownItem
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { observer } from "mobx-react";
import { ITempConverterStore } from './stores/ITempConverterStore';

interface AppState {
}

interface IAppProps {
  tempConverterStore: ITempConverterStore
}


@observer
class App extends Component<IAppProps, AppState> {

  timer: any;
  constructor(props: any) {
    super(props);

  }

  convert = () => {
    this.props.tempConverterStore.performConversion();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <h1>Welcome to Temperate Converter</h1>
          </Row>
          <Row>
            <Col>
              <Card>
                <Input
                  type="number"
                  id='userInput'
                  value={this.props.tempConverterStore.userInput}
                  placeholder="Type the above content here..."
                  onChange={(e: any) => {
                    this.props.tempConverterStore.setUserInput(e.target.value) }
                  }
                ></Input>

              </Card>
            </Col>
            <Col>
              <Card>

                <div className="select">
                  <select id="conversionDdl" className='dropdown' name="conversionDdl"
                    onChange={(val) => {
                      this.props.tempConverterStore.setSelectedOption(val.currentTarget.value)
                    }
                    }
                    value={this.props.tempConverterStore.selectedOption}>
                    {this.props.tempConverterStore.conversionOptions.map((e, key) => {
                      return <option key={key} value={e}>{e}</option>;
                    })}
                  </select>
                </div>
              </Card>
            </Col>
            <Col>
            <Card>
                <CardBody>
                  <Label onClick={this.convert}>{this.props.tempConverterStore.convertedValue}</Label> {' '}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className='margin-top'>
            <Col>
              <Card>
                <CardBody>
                  <Button onClick={this.convert}>Convert</Button> {' '}
                </CardBody>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
