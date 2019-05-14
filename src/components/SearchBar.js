import React from 'react';
class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    render () {
        return (
            <div className="search-bar">
                <form >
                    <input
                    type="text"
                    value={this.state.search}
                    onChange={this.inputText}
                    />
                    <button
                    type="button"
                    // value="search"
                    onClick={()=>this.props.handleSubmit(this.state.search)}
                    >Search</button>
                </form>
            </div>
        )
    }
    inputText = (search) => {
        console.log("input t3xt", search)
        this.setState({
            search: search.target.value
        });
        console.log(search);
        
    }
}
export default SearchBar;