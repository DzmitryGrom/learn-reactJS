'use strict';



const e = React.createElement;

// React function component
const ButtonSearch = props => {
    const {st, text} = props;
    return e (
        'button',
        { className: 'component', style: { backgroundColor: st ? 'white' : 'pink', color: st ? 'pink' : 'white' } },
        text
    )
}

// React component
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isClicked: false };
    }
    render() {
        return e(
        'input',
        { placeholder: this.props.placeholder, className: 'component' , type: 'text', style: { width: '100%', backgroundColor: !this.state.isClicked ? 'black' : 'white', color: !this.state.isClicked ? 'white' : 'black', border: 'none', lineHeight: '30px' }, onClick: () => this.setState({ isClicked: !this.state.isClicked }) },
        );
    }
}

class AppCpmponent extends React.PureComponent {

    render() {
        return  e(
            'div',
            null,
            ButtonSearch({ st:true, text:'Some' }),
            e(Search, {placeholder: 'World'}, null),
            //(new Search({ placeholder: 'World' })).render()
            
        );
    }
}

ReactDOM.render(React.createElement(AppCpmponent), document.getElementById('root'));
