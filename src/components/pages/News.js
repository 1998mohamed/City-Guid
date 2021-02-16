import React from 'react'
import NewsCard from '../pages/NewsCard';
import { InfoConsumer } from '../context';

function News() {
    return (
        <InfoConsumer>
            {value => {
                return value.news.map(item => {
                    return <NewsCard key={item.id} item={item} />
                })
            }}
        </InfoConsumer>
    )
}
export default News;