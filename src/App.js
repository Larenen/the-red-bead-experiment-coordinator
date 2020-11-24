import './App.css';
import Paddle from './Components/paddle';
import React, {useState} from 'react';
import AdditionalOptions from './Components/additional-options';
import { initPaddle, shakePaddle } from './Components/paddle';

function App() {
  const [beads, setBeads] = useState(initPaddle());
  const [initStep, setInitStep] = useState(true);
  const [firstPassed, setFirstPassed] = useState(false);
  const [secondPassed, setSecondPassed] = useState(false);
  const [thirdPassed, setThirdPassed] = useState(false);
  const [fourthPassed, setFourthPassed] = useState(false);

  const [rightStepTwo, setRightStepTwo] = useState(false);
  const [leftStepTwo, setLeftStepTwo] = useState(false);
  const [downStepTwo, setDownStepTwo] = useState(false);
  const [upStepTwo, setUpStepTwo] = useState(false);

  const [rightStepFour, setRightStepFour] = useState(false);
  const [leftStepFour, setLeftStepFour] = useState(false);
  const [downStepFour, setDownStepFour] = useState(false);
  const [upStepFour, setUpStepFour] = useState(false);

  return (
    <div className="App">
      <h1>Krok pierwszy:</h1>
      <button className="button" disabled={!initStep} onClick={() => {
        setInitStep(false);
        setFirstPassed(true);
        setBeads(initPaddle());

        setRightStepTwo(false);
        setLeftStepTwo(false);
        setDownStepTwo(false);
        setUpStepTwo(false);

        setRightStepFour(false);
        setLeftStepFour(false);
        setDownStepFour(false);
        setUpStepFour(false);
        }}>Zamieszaj kulki</button>

      <h1>Krok drugi:</h1>
      <AdditionalOptions 
        number={1} isEnabled={firstPassed} right={rightStepTwo} setRight={setRightStepTwo} left={leftStepTwo} setLeft={setLeftStepTwo}
        down={downStepTwo} setDown={setDownStepTwo} up={upStepTwo} setUp={setUpStepTwo} setStepPassed={setSecondPassed}
      />

      <h1>Krok trzeci:</h1>
      <Paddle isEnabled={secondPassed} beads={beads} setBeads={setBeads} setStepPassed={setThirdPassed}/>

      <h1 h1>Krok czwarty:</h1>
      <AdditionalOptions 
        number={2} isEnabled={thirdPassed} right={rightStepFour} setRight={setRightStepFour} left={leftStepFour} setLeft={setLeftStepFour}
        down={downStepFour} setDown={setDownStepFour} up={upStepFour} setUp={setUpStepFour} setStepPassed={setFourthPassed}
      />
      <button className="button" disabled={!fourthPassed} onClick={() => {
        setBeads(shakePaddle(beads));
        setInitStep(true);
        setFirstPassed(false);
        setSecondPassed(false);
        setThirdPassed(false);
        setFourthPassed(false);
      }}>Potrząśnij tacką</button>
    </div>
  );
}

export default App;