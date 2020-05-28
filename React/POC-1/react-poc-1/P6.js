//Different way of rending multiple (1+) components in react. React way, with empty angled brackets.
function Button() {
    const [counter, setCounter] = useState(0);
    const handleClick = ()=> setCounter(counter + 1);
      return (
      <button onClick={handleClick}>
        {counter}
      </button>
      );
  }
  
  function Display(){
    return (
      <div>....</div>
    );
  }
  
  
  ReactDOM.render(
    <>
        <Button></Button>
        <Display></Display>
    </>, 
    document.getElementById('mountNode'),
  );
  