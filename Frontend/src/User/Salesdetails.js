import React from 'react'

const Salesdetails = () => {
  return (
    <div style={{width: "100vw", maxWidth: "500px"}}>
        <p>Particuler sales details</p>
            <div className="productDetails" style={{margin: "0px 20px"}}>
                    <div className="d-flex" style={{justifyContent: "space-between"}}>
                        <span>Navigation</span>
                        <span>Navigation</span>
                    </div>
                    <div className="productList">
                        <p>Product status</p>
                        <div className="d-flex" style={{justifyContent: "space-between"}}>
                            <p>Product name(with image quantity)</p>
                            <p>price</p>
                        </div>
                    </div>
                    <button>Update Status</button>

                </div>
                <div>
                    billing
                </div>
                <div>
                    coustomer and shipping details
                </div>
    </div>
  )
}

export default Salesdetails