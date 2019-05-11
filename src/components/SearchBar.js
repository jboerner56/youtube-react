import React from 'react';
class Searchbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        };
    }
    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" value={this.state.search} name="video-search"/>
                    <label htmlFor="video-search">Search</label>
                </form>
            </div>
        )
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleVideoSubmit(this.state.search);
        console.log('this was submitted', this.input.value);
        
    }
}

export default Searchbar;