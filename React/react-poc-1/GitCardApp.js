// Run code in the url : https://jscomplete.com/playground/


//Card
class Card extends React.Component{
    render(){
      const profile = this.props;
     return (
       <div className="github-profile">    
         <img src = {profile.avatar_url} />
         <div className="info">
           <div className = "name">{profile.name}</div>
           <div className = "company">{profile.company}</div>
         </div>
     </div>
       );
    }  
  }
  
  // List of the Card
  const CardList = (props) => (
    <div>
      {props.profiles.map(profile => <Card {...profile} />)}
    </div>
  );
  
  class Form extends React.Component{
    state = {userName: ''};
  
    handleSubmit = async (event) =>{
      event.preventDefault();
      const response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(response.data);    
      this.setState({userName: ''});
    };
    
    render(){
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder = "Github username" 
            required 
            value = {this.state.userName}
            onChange={event => this.setState({ userName: event.target.value})}
          /> 
          <button>Add Card</button>
        </form>
      );
    }
  }
  
  class App extends React.Component{
    state = {
      profiles: []
    };    
    
    addNewProfile = (profileData) => {  
      this.setState(prevState => ({
        profiles: [...prevState.profiles, profileData]
      }));    
    };
  
    render(){
      return (
        <div>
          <div className="header">{this.props.title}</div>
          <Form onSubmit={this.addNewProfile} />
          <CardList profiles = {this.state.profiles} />
        </div>
        );
    }
  }
  
  ReactDOM.render(
      <App title="The GitHub Cards App" />,
    mountNode,
  );