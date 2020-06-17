//Attaching a click handler using arrow function. 

function Button() {
    const [counter, setCounter] = useState(0);
      return <button onClick={()=> setCounter(counter + 1) }>{counter}</button>;
  }
  
  ReactDOM.render(
    <Button />, 
    document.getElementById('mountNode'),
  );
  