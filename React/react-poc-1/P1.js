//Simplest program for react. 

function Button() {
	return <button>Click Me!</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);