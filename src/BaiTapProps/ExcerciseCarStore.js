import React, { Component } from 'react'
import Cars from './Cars' 
import CarDetail from './CarDetail'

export default class ExcerciseCarStore extends Component {
    products =[
        {id:1, name:'Black car' , img:'./images/product/black-car.jpg',price:1000},
        {id:2, name:'Red car' , img:'./images/product/red-car.jpg',price:2000},
        {id:3, name:'Silver car' , img:'./images/product/silver-car.jpg',price:3000},
        {id:4, name:'Steel car' , img:'./images/product/steel-car.jpg',price:4000},
    ]
    state ={
        productDetail :[
            {id:1, name:'Black car' , img:'./images/product/black-car.jpg',price:1000},
        ]
    }
    renderCar =()=>{
        return this.products.map((car,index) =>{
            return <div className="col-3" key={index}>
                <Cars cars={car} carClick ={this.changeCar}/>
            </div>
        })
    }
    changeCar =(carClick) =>{
        console.log('carClick',carClick);
        //Click vào lấy ra 1 obj tương ứng
        this.setState({
            productDetail : carClick
        })
    }
    render() {
        // let {productDetail}= this.state;
        return (
            <div className="container">  
                <h3 className="text-center">Danh Sách xe</h3>
                <div className="row">
                    {this.renderCar()}
                </div> 
                 {/* Modal
                 <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            
                            <div className="modal-header">
                                <h5 className="modal-title">{productDetail.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img width={470} src={productDetail.img} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <CarDetail productDetail ={this.state.productDetail}/>
            </div>
        )
    }
}
