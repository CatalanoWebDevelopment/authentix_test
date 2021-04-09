import './App.css';
import { ControlGroup } from './components/ControlGroup';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="md">
      <ControlGroup selectionCriteria='First Name' input1={'Parker'} input2={'Michael'} />
      <ControlGroup selectionCriteria='Last Name' input1={'Catalano'} input2={'Fraser'} />
      {/* <ControlGroup selectionCriteria='Empty' input1={''} input2={''} /> */}
    </Container>
  );
}

export default App;
