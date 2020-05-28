//Passing state & behaviour in the child component in React. 

function Button(props) {
    //const handleClick = ()=> setCounter(counter + 1);
      return (
      <button onClick={props.onClickFunction}>
        +1
      </button>
      );
  }
  
  function Display(props){
    return (
      <div>{props.message}</div>
    );
  }

function App(){
  const [counter, setCounter] = useState(40);
  const incrementCounter = ()=> setCounter(counter + 1);
  
  return (
    <div>
        <Button onClickFunction={incrementCounter}></Button>
        <Display message={counter}></Display>
    </div>
  );
}
  
  
  ReactDOM.render(
    <App />, 
    document.getElementById('mountNode'),
  );
  