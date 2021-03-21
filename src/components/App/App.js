import React, { Component } from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        }
    }

    handleInputChange = (inputText) => {

        //this.setState({ headerExpanded: (inputText.length > 0) ? false : true })
        // this.setState({ headerExpanded: !(inputText.length > 0) })
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        })
    }

    render() {
        return (
            <div>
                <Header
                    headerTitle={this.state.headerText}
                    headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }

}

export default App