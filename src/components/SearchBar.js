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
                    onClick={(e)=>this.props.handleSubmit(e,this.state.search)}
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
    }
}

    // handleChange = (e) => {
    //     this.setState({
    //         search: e.target.value
    //     });
    // 
    
export default SearchBar;