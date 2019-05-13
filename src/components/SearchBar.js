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
                type="text"
                value={this.state.search}
                onChange={this.handleChange}
                />
                {/* <button onClick={handleSearchSubmit}/> */}
            </div>
        )
    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        });
        this.props.handleSearchSubmit(e.target.value)
    };
    handleSearchSubmit = (e) => {
        e.preventDefault();
        this.setstate({
            search: this.state.search
        })
    }
}

export default Searchbar;