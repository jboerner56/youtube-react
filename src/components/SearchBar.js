import React from 'react';
class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            
        };
        this.onChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="search-bar">
                <input
                value={this.state.search}
                onChange={this.handleChange}
                />
            </div>
        )
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     this.props.handleVideoSubmit(this.state.search);
    //     console.log('this was submitted', this.input.value);
        
    // }
}

export default Searchbar;