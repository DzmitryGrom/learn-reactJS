import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  handleClick = () => this.setState(({ isClicked }) => ({ isClicked : !isClicked }));

  render() {
    return (
      <input placeholder={this.props.placeholder} type: 'text'
         onClick: this.handleClick
         style={{ width: '100%', backgroundColor: !this.state.isClicked ? 'black' : 'white', color: !this.state.isClicked ? 'white' : 'black', border: 'none', lineHeight: '30px' }}
      />
    );
  }
}

export default SearchInput;