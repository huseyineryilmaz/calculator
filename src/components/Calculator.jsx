import React from 'react';

const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    zero: 0
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            display: 0
        }
        this.handleClear = this.handleClear.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    isElementNumber(element) {
        return Object.values(numbers).includes(element);
    }
    handleClear() {
        this.setState({
            display: 0
        })
    }

    handleDisplay(event) {
        this.setState({
            display: this.isElementNumber && this.state.display !== 0 ? this.state.display + event.target.value : event.target.value
        })
    }

    render() {
        return (
            <div className='calculator'>
                <div className='formulaScreen'></div>
                <div id='display' className='outputScreen'>{this.state.display}</div>
                <div>
                    <button id='clear' className='jumbo' onClick={this.handleClear}>AC</button>
                    <button id='divide' className='operation'>/</button>
                    <button id='multiply' className='operation'>x</button>
                    <button id='seven' value={numbers.seven} onClick={this.handleDisplay}>{numbers.seven}</button>
                    <button id='eight' value={numbers.eight} onClick={this.handleDisplay}>{numbers.eight}</button>
                    <button id='nine' value={numbers.nine} onClick={this.handleDisplay}>{numbers.nine}</button>
                    <button id='subtract' className='operation'>-</button>
                    <button id='four' value={numbers.four} onClick={this.handleDisplay}>{numbers.four}</button>
                    <button id='five' value={numbers.five} onClick={this.handleDisplay}>{numbers.five}</button>
                    <button id='six' value={numbers.six} onClick={this.handleDisplay}>{numbers.six}</button>
                    <button id='add' className='operation'>+</button>
                    <button id='one'  value={numbers.one} onClick={this.handleDisplay}>{numbers.one}</button>
                    <button id='two' value={numbers.two} onClick={this.handleDisplay}>{numbers.two}</button>
                    <button id='three' value={numbers.three} onClick={this.handleDisplay}>{numbers.three}</button>
                    <button id='equals'>=</button>
                    <button id='zero' className='jumbo' value={numbers.zero} onClick={this.handleDisplay}>{numbers.zero}</button>
                    <button id='decimal'>.</button>
                </div>
            </div>
        )
    }
}

export default Calculator;