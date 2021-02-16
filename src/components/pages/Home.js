import React, { Component } from 'react';
// import Typed from "react-typed";
import { InfoConsumer } from '../context';
import Info from '../Info';

class Home extends Component {
    render(){
        return (
        <div className="container">
            <div className="row nt-5">
            <InfoConsumer>
                {value => {
                    return value.info.map(item => {
                        return <Info key={item.id} item={item} />
                    })
                }}
            </InfoConsumer>
            </div>
        </div>
            
    )
    }
   
}
export default Home;