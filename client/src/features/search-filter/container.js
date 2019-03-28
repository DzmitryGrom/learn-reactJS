import React, { Component } from 'react';

import FilterComponent from './component';


class FilterContainer extends Component {
    state = {
        valueInput: false,

    };

    componentDidMount() {
        this.textInput.focus();
    }

    getInputRef = (node) => { this.textInput = node; };

    handleClick = () => this.setState({ valueInput: this.textInput.value });

    render() {
        const { valueInput } = this.state;
        if (valueInput.length > 15) {
            throw new Error('I crashed!');
        }
        return (
            <FilterComponent getInputRef={this.getInputRef} onEventClick={this.handleClick} />
        );
    }
}

export default FilterContainer;