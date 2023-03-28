import React from 'react'

const Modeller = () => {
  return (
    <div style={{width: "100vw", maxWidth: "500px"}}>
      <div style={{color: "#FFF", background: "#000", height: "30px"}}>Nav</div>
      <p>Model View Page</p>
        <h5>Product Name </h5>
        <div style={{width: "100%", height: "300px", background: "grey"}}>Image</div>
        <div style={{width: "100%", height: "250px", background: "#f3f3f3"}}>Pricing Details</div>
        <div className='my-2' style={{textAlign: "center"}}>Contact Seller</div>
        <div style={{width: "100%", height: "250px", background: "#808080"}}>About the seller</div>
        <div>Product Description</div>
        <div>Faq</div>
        <div>Review</div>
    </div>
  )
}

export default Modeller
