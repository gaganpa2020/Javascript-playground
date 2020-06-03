import React from 'react';
import './AddAuthorForm.css';

class AuthorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            bookTemp: ''
        };

        this.onFieldChange = this.onFieldChange.bind(this);        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.AddBookHandler = this.AddBookHandler.bind(this);
    }

    AddBookHandler(event){
        this.setState({
            books: this.state.books.concat([this.state.bookTemp]),
            bookTemp: ''
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state);
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        return <form onSubmit={this.handleSubmit}>
                <div className="AddAuthorForm__input">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value={this.state.name} onChange={this.onFieldChange}></input>
                </div>
                <div className="AddAuthorForm__input">
                  <label htmlFor="imageUrl">Image Url</label>
                  <input type="text" name="imageUrl" value={this.state.imageUrl}  onChange={this.onFieldChange}></input>
                </div>
                <div className="AddAuthorForm__input">
                    {this.state.books.map((book) => <p key={book}>{book}</p>)}
                    <input type="text" name="bookTemp" value={this.state.bookTemp}  onChange={this.onFieldChange}></input>
                    <input type="button" value="+" onClick={this.AddBookHandler}></input>
                </div>
                <input type="submit" value="add"></input>
            </form>;
    }
}


function AddAuthor({match, onAddAuthor}){
    return (
    <div className="AddAuthorForm"> 
      <h1>Add Author</h1>        
        <AuthorForm onAddAuthor={onAddAuthor}></AuthorForm>
    </div>);    
}

export default AddAuthor;