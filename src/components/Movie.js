import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {Link} from "react-router-dom"

export class Movie extends Component {
    static propTypes = {
        id: Proptypes.string,
        title: Proptypes.string,
        year: Proptypes.string,
        poster: Proptypes.string
    }
    render() {
        const { id, poster, title, year } = this.props
        return (<Link to={`/detail/${id}`} className="card">
            <div className="card ">
                <div className="card-image ">
                    <figure className="image movie-card">
                        <img src={poster} 
                        alt={title}/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6 tag is-info">{year}</p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        )
    }
}