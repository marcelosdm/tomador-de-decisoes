class VisitilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {
                this.state.visibility && (
                    <p>Hey! Here are some details for you!</p>
                )
            }
        </div>
    );

    }
}

ReactDOM.render(<VisitilityToggle />, document.getElementById('app'));

// let visibility = false;

// const visibilityToggle = () => {
//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {

    // const jsx = (
    //     <div>
    //         <h1>Visibility Toggle</h1>
    //         <button onClick={visibilityToggle}>
    //             {visibility ? 'Hide details' : 'Show details'}
    //         </button>
    //         {
    //             visibility && (
    //                 <p>Hey! Here are some details for you!</p>
    //             )
    //         }
    //     </div>
    // );

//     ReactDOM.render(jsx, document.getElementById('app'));
// }

// renderApp();