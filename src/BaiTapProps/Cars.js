import React, { Component } from 'react'

export default class Cars extends Component {


    render() {
        let {cars} = this.props;
        return (
            <div className="card bg-light text-dark">
                <img src={cars.img} alt="..." height={200}/>
                <div className="card-body">
                    <h4>{cars.name}</h4>
                    <p>{cars.price}</p>
                    <button onClick={() => {
                        this.props.carClick(cars);
                    }} className="btn btn-success" data-toggle="modal" data-target="#modelId">Xem chi tiết</button>
                </div>
                
            </div>
        )
    }
}
