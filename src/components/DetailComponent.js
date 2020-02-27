import React, { Component } from 'react'
import { ButtonBackToHome } from './ButtonBackToHome'


class DetailComponent extends Component{
    render(){
        console.log(this.props);
        
        const { Title, Poster, Actors, Metascore, Plot, Year } = this.props.details
        return (
            <div className="center-detail">
                <article className="message is-info">
                    <div className="message-header">
                        <h1 className="title">{Title} ({Year})</h1>
                    </div>
                    <div className="message-body">
                        <img src={Poster}
                            alt={Title} />
                        <h3><strong>Actors: </strong> {Actors}</h3>
                        <span><strong>Critic score: </strong> {Metascore}</span>
                        <p><strong>Plot:</strong> {Plot}</p>
                        <ButtonBackToHome />
                    </div>
                </article>
            </div>
        )
    }
}

export default DetailComponent