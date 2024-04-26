import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { MyText } from './Components/MyText';

function App() {
  const [stateButton, setStateButton] = useState(true);
  const [stateText, setStateText] = useState<string>("");

  console.log(stateButton);

  return (
      <>
        {MyText(stateText, setStateText)}
        <Button variant="warning" onClick={() => setStateButton(!stateButton)}>My Button</Button>
      </>
  );
}

export default App;