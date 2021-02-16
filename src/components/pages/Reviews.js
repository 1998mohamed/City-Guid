import React, { Component } from 'react'
import {InfoConsumer} from '../context'
import ReviwCard from './ReviewCard'

 class Reviews extends Component {
    render() {
        return (
            <InfoConsumer>
                {data => {
                    return data.reviews.map(person=>{
                        return <ReviwCard key={person.id} person={person} />
                    })
                }}
            </InfoConsumer>
        )
    }
}
export default Reviews;