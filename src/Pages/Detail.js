import React, { Component } from 'react'
import Proptypes from 'prop-types'
import DetailComponent from '../components/DetailComponent'

const API_KEY = "b02e3fa8"

export class Detail extends Component {
    static propTypes = {
        match: Proptypes.shape({
            params: Proptypes.object,
            isExact: Proptypes.bool,
            path: Proptypes.string,
            url: Proptypes.string
        })
    }

    state = {
        movie: {}
    }

    _fetchMovie = ({ id }) => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({ movie });
                this.setState({ movie })
            })
    }
    componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        return (
            <div className="center-detail">
            <DetailComponent details={this.state.movie}/>
            </div>
        )
    }
}