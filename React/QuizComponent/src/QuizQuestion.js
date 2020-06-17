import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{
    
    constructor(props){
        super(props);
        this.state= {incorrectAnswer : false};
    }

    handleClick(buttonText){
        if(buttonText === this.props.quiz_question.answer){
            console.log('Correct answer');
            this.props.showNextQuestionHandler();
            this.setState({incorrectAnswer : false});
        }else{
            console.log('inCorrect answer');
            this.setState({incorrectAnswer : true});
        }
    }

    render(){
       return (<main>
           {this.state.incorrectAnswer? <p className="error">incorrect answer</p>: null}
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>  
                {this.props.quiz_question.answer_options.map(
                    (answer_option, index)=> 
                    <QuizQuestionButton 
                        button_text = {answer_option} 
                        key={index} 
                        clickHandler = {this.handleClick.bind(this)} /> )}                
          </ul>
        </section>
      </main>);
    }
}

export default QuizQuestion;