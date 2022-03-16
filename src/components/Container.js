import { useState } from 'react';
import '../css/Container.css';
import Card from './UI/Card';
import Button from './UI/Button';
import Header from './Layout/Header';
import Submission from './Submission/Submission';
import SubmissionProvider from './store/SubmissionProvider';


const reset = (target) => {
  target.value = ""
}
export default function Container() {
  const[SubmissionShown, setSubmission] = useState(false);

  const showSubmissionHandler = () => {
    setSubmission(true);
  }

  const hideSubmissionHandler = () => {
    setSubmission(false);
  }

  const [input, setInput] = useState(`print('Hello Jenna!')`);

  return (
    <div className="Container">
      
      <Card>
      <h1>Spinoza</h1>
      </Card>
      <SubmissionProvider>
        {SubmissionShown && <Submission onClose={hideSubmissionHandler}/>}
        <Header onShowCart={showSubmissionHandler}/>
        
      </SubmissionProvider>
      <Card>
        Print the first 10 prime numbers
      </Card>
      <Card>
      <br />

      <textarea id="1" name="1" rows="4" cols="50"
        placeholder={input}
        onChange={((e) => {
          console.log('set input: ', e.target.value)
          setInput(e.target.value)
        })} />
      </Card>

      <Card>
      <textarea id="2" name="2" rows="4" cols="50"
        placeholder="Output goes here" />
      </Card>
      <Card>
      <textarea id="3" name="3" rows="4" cols="50"
        placeholder="This is the console to display standard Output" />
      </Card>
      <Button  onClick={async() => {
        console.log('clicked the run button')
        window.code.value = input
        await window.evaluatePython()
        document.getElementById('2').value = window.output.value
        document.getElementById('3').value = window.stdout.value
      }}>Run</Button>
    </div>
  );
}
