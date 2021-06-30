import React, { Component } from 'react'

export default class CarDetail extends Component {
    renderCarDetail = () => {
        let {productDetail} = this.props;
            return <div>
                <div className="modal-header">
                    <h5 className="modal-title">{productDetail.name}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <img width={470} src={productDetail.img}/>
                </div>
            </div>
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {this.renderCarDetail()}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

