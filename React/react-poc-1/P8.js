//Reusing component, Passing state & behaviour. 
function Button(props) {
    const handleClick = ()=>{ props.onClickFunction(props.increment) };
    return (
    <button onClick={handleClick}>
      +{props.increment}
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
const incrementCounter = (increment)=> setCounter(counter + increment);

return (
  <div>
    <Button onClickFunction={incrementCounter} increment={1}></Button>
    <Button onClickFunction={incrementCounter} increment={5}></Button>
    <Button onClickFunction={incrementCounter} increment={10}></Button>
    <Button onClickFunction={incrementCounter} increment={100}></Button>      
      <Display message={counter}></Display>
  </div>
);
}


ReactDOM.render(
  <App />, 
  document.getElementById('mountNode'),
);
