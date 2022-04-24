/*
  Python Container --
  this component will evaluate Python code entered
  by the user in a textarea and will print the result
  and the output in corresponding textareas.
  It relies on the pyodide being loaded in the head
  which is done by the Helmet component in index.js
*/
import { useState } from 'react';
import '../css/Container.css';

const reset = (target) => {
  target.value = ""
}
export default function Container() {
  const [input, setInput] = useState(`print('Hello Jenna!')`);

  return (
    
    <div className="Container">
      
      <h1>Spinoza</h1>
      <br />

      <textarea id="1" name="1" rows="4" cols="50"
        placeholder={input}
        onChange={((e) => {
          console.log('set input: ', e.target.value)
          setInput(e.target.value)
        })} />

      <textarea id="result" name="2" rows="4" cols="50"
        placeholder="Output goes here" />
      
      <textarea id="output" name="3" rows="4" cols="50"
        placeholder="This is the console to display standard Output" />

      <button onClick={async() => {
        console.log('clicked the run button')
        //window.code.value = input
        const indexURL=
            'https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js'

        if (!window.pyodide) {
            console.log('loading pyodide')
            console.log('window.loadPyodide=')
            console.dir(window.loadPyodide)
            window.pyodide = 
              await window.loadPyodide()
            console.log('pyodide loaded')
        }
        console.dir(window.pyodide)
        console.log('calculating result')
        // first we redirect studout to a string
        window.pyodide.runPython(`
        import sys
        import io
        sys.stdout = io.StringIO()`)

        // then we evaluate the input 
        let result = window.pyodide.runPython(input)
        let output = window.pyodide.runPython("sys.stdout.getvalue()")
        console.log("the result is "+result)
        console.log("and the output is "+output)
        // await window.evaluatePython()
        document.getElementById('result').value = result
        document.getElementById('output').value = output
     
      }}>Run</button>

      <button onClick={async () => {
            console.log('ready to fetch')
            const response = await fetch('/api/hello');
            console.log('fetched') 
            console.dir(response)       
            const body = await response.json();
            console.log('awaiting')
            console.dir(body)
            if (response.status !== 200) throw Error(body.message);
      }}>Test Fetch</button>

    </div>
  );
}
