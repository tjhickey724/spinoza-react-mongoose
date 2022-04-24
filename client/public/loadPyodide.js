// this loads pyodide and stores the result in 
// window.pyodide
async function main(){
    let pyodide = await loadPyodide();
    window.pyodide=pyodide
    console.log(pyodide.runPython(`
        import sys
        sys.version
    `));
main()
