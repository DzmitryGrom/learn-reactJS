'use strict';



const e = React.createElement;

// React function component
const ButtonSearch = ({isState, text}) => {
    return e (
        'button',
        { className: 'component', style: { backgroundColor: isState ? 'white' : 'pink', color: isState ? 'pink' : 'white' } },
        text
    )
}

// React component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }
    handleClick() {
        this.setState(function(state, props) {
            return {
                isClicked: !state.isClicked
            }
        });
    }
    render() {
        return e(
        'input',
        { placeholder: this.props.placeholder, className: 'component' , type: 'text', style: { width: '100%', backgroundColor: !this.state.isClicked ? 'black' : 'white', color: !this.state.isClicked ? 'white' : 'black', border: 'none', lineHeight: '30px' }, onClick: () => this.handleClick() },
        );
    }
}

class AppCpmponent extends React.PureComponent {

    render() {
        return  e(
            'div',
            null,
            ButtonSearch({ isState:true, text:'Some' }),
            e(Search, {placeholder: 'World'}, null)
        );
    }
}

ReactDOM.render(React.createElement(AppCpmponent), document.getElementById('root'));
