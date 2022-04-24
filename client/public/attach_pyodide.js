const runitall = () => {
  console.log("running the attach_pyodide.js script")
  console.log('loadPyodide=')
  console.dir(loadPyodide)
  const result = {value:""}
  const code = {value:"print(23*27); 19*6"}
  const stdout = {value:""}
  window.result = result
  window.code = code
  window.stdout = stdout
  window.pyodideLoaded = false

  // window.consoleOutput = consoleOutput
  window.main = main
  window.evaluatePython = evaluatePython

  const addToResult = (s) => {
    console.log("in addToResult. s:", s)
    result.value = s;
    console.log('>>> ' + result.value)
  }
  const addToStdOut = (s) => {
    console.log("in addToStdOut. s:", s)
    stdout.value = s;
    console.log('>>> ' + stdout.value)
  }
  const reset = (target) => {
    target.value = "";
  }

  result.value = "Initializing...\n";
  let paragraph = document.getElementById("p");

  // init Pyodide
  async function main() {
    console.log(window)
    if(window.pyodideLoaded) {
      return
    } else {
      window.pyodideLoaded = true
    }
    let pyodide = await loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
    });
    result.value += "Ready!\n";
    return pyodide;
  }
  let pyodideReadyPromise = main();

  async function evaluatePython() {
    let pyodide = await pyodideReadyPromise;
    window.pyodide = pyodide
    try {
      console.log('in evaluatePython')
      pyodide.runPython(`
          import sys
          import io
          sys.stdout = io.StringIO()
      `);

      // This only returns a value if the result of the python expression returns a value
      // For example, if we are trying to print("hello world") the result will be
      // undefined but the correct output will be printed in the console.
      // Solution: set up a method for capturing pyodide's output stream when
      // result of python expression is undefined
      reset(window.result);
      reset(window.stdout);
      console.log(code.value)
      let result = pyodide.runPython(code.value);
      let stdout = pyodide.runPython("sys.stdout.getvalue()")
      console.log("result: ", result);
      console.log("stdout: ",stdout)

      // If expression evaluates to a certain result, we update output, otherwise update stdout
      if (stdout) {
        // var div = document.createElement('div');
        // div.innerText = stdout;
        // document.body.appendChild(div);
        addToStdOut(stdout)
      } 
      if (result){
        // var div = document.createElement('div');
        // div.innerText = result
        // document.body.appendChild(div)
        addToResult(result);
      }

    } catch (err) {
      addToResult(err);
    }
  }

  window.evaluatePython = evaluatePython
}


window.runitall = runitall
console.log("loaded runitall")
