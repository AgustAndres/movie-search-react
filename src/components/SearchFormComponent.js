import React, { Component } from 'react'

class SearchFormComponent extends Component {
    state = {
        inputMovie: ""
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
        console.log(this.state.inputMovie);
        
        //this.props.inputMovie(e.target.value)
    }
    render() {
        return (
            <div>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Search movie" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                            </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchFormComponent