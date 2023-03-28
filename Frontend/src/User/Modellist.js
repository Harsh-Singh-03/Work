import React from 'react'

const Modellist = () => {
  return (
    <div style={{width: "100vw", maxWidth: "500px"}}>
      <p>Model List Page</p>
      <div className='d-flex'  style={{color: "#FFF", background: "#000", height: "30px", justifyContent: "space-between"}}>
        <p>Nav</p>
        <p>Login</p>
      </div>
      <div className="d-flex" style={{justifyContent: "", alignItems: "center"}}>
        <p className='mx-4'>post a request</p>
        <p style={{width: "100%", height: "100px" , border: "1px dashed #808080", display: "grid", placeItems: "center"}}>Banner search for modeller / printer</p>
      </div>
      <p>Recommended Product List</p>
      <p>Top Category Product List</p>
      <p>Recommended modeller or printer and product</p>
      <div>
      </div>
    </div>
  )
}

export default Modellist
