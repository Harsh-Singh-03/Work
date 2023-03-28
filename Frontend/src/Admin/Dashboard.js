import React, { useState, useEffect, useContext } from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Sidenav from './Sidenav'
import "./Dashboard.css"
const Addproduct = () => {
    const context = useContext(NoteContext)
    const {backopacity, setbackopacity, Hamtoggle, setHamtoggle} = context
    const [MPID, setMPID] = useState([])
    const [ListData, setListData] = useState([])
    const [etags, setetags] = useState([])
    const [editTag, seteditTag] = useState("")

    const [populer1, setpopuler1] = useState(false)
    const [editImage, seteditImage] = useState({ imageUrl: "" })
    const [eimg, seteimg] = useState([])
    const [AllData, setAllData] = useState([])
    const [mostPopuler, setmostPopuler] = useState([])
    const [listDisplay, setListDisplay] = useState("block")
    const [editDisplay, seteditDisplay] = useState("none")

    const [mainDisplay, setmainDisplay] = useState("none")
    const [MPdisplay, setMPdisplay] = useState("none")

    const [trackQuantity, settrackQuantity] = useState(true)
    const [trackQuantity1, settrackQuantity1] = useState(true)
    const [continueSell1, setcontinueSell1] = useState(true)
    const [physicalProduct1, setphysicalProduct1] = useState(false)
    const [Isdisable1, setIsdisable1] = useState(false)
    const [Isdisable2, setIsdisable2] = useState(false)
    const [count, setcount] = useState(0)

    const [category, setCategory] = useState("initial")
    const [Collection, setCollection] = useState("initial")
    const [Type, setType] = useState("initial")

    const { id } = useParams()
    const History = useHistory()

    const [editForm, setEditForm] = useState({
        name: "",
        slug: "",
        // id: "",
        metaDescription: "",
        url: "",
        price: 0,
        priceCompare: 0,
        pageTitle: "",
        weight: "",
        sellerID: "",
        sellerEmail: "",
        tax: true,
        costPerItem: 0,
        origin: "",
        sku: "",
        quantity: 1,
        location: "",
        illustrationImageUrl: "",
        publishedAt: "",
        description: ""
    })

    useEffect(() => {
        verify()
        getData()
    }, [])

    const verify = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/admin-verify`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            })
            const json = await response.json()
            console.log(json)
            if (json.success === true) {
                setmainDisplay("block")
            }
            else {
                setmainDisplay("none")
                History.push('/admin-login')
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            setmainDisplay("none")
            // History.push('/admin-login')
            console.log(error)
            // document.getElementById("n").click();
        }
    }


    const getData = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/get-printable`, {
                method: 'GET',
            })
            const json = await response.json()
            if (Array.isArray(json)) {
                const MPData = json.filter(item => item.populer === true);
                const Normaldata = json.filter(item => item.populer !== true);
                setAllData(json)
                console.log(json)
                setListData(Normaldata)
                setmostPopuler(MPData)
                setcount(MPData.length)
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }

    const DeleteData = async (id) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/delete-printable/?id=${id}`, {
                method: 'DELETE',
            })
            const json = await response.json()
            
            console.log(json)
            if(json.success === true){
                alert(json.msg)
                window.location.reload()
            }
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }
    const editData = async (id) => {
        setListDisplay("none")
        setMPdisplay("none")
        seteditDisplay("block")
        setEditForm(id)
        setetags(id.tags)
        seteimg(id.illustrations)
        setpopuler1(id.populer)
        settrackQuantity1(id.trackQuantity)
        setcontinueSell1(id.continueSell)
        setphysicalProduct1(id.physicalProduct)
        setCategory(id.category)
        setCollection(id.collection)
        setType(id.type)
    }
    //  edit
    const handleChange1 = (event) => {
        const { name, value } = event.target;
        setEditForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const HandleSubmit1 = async (e) => {
        const data = editForm;
        data.tags = etags
        data.illustrations = eimg
        data.populer = populer1
        data.trackQuantity = trackQuantity1
        data.continueSell = continueSell1
        data.physicalProduct = physicalProduct1
        data.price = parseInt(editForm.price)
        data.costPerItem = parseInt(editForm.costPerItem)
        data.priceCompare = parseInt(editForm.priceCompare)
        data.quantity = parseInt(editForm.quantity)
        data.category = category
        data.type = Type
        data.collection = Collection
        e.preventDefault()
        if(data.name !== "" && data.url !== "" && data.price !== 0 && data.quantity > 0 && data.sku !== "" && data.illustrationImageUrl !== "" && data.category !== "initial" && data.description !== "" && data.tags.length > 0 && data.illustrations.length >= 2 && data.Collection !== "initial" && data.type !== "initial"  ) {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/update-printable/?id=${editForm.id}`, {
                method: 'PUT',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const json = await response.json()
            if (json.success === true) {
                alert(json.msg)
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }
    }
    const HandleTag1 = (e) => {
        seteditTag(e.target.value)
    }

    const storeTag1 = (e) => {
        e.preventDefault()
        setetags(etags.concat(editTag))
        seteditTag("")
    }

    const handleImg1 = (e) => {
        const { name, value } = e.target;
        seteditImage((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const storeImage1 = (e) => {
        e.preventDefault()
        seteimg(eimg.concat(editImage))
        seteditImage({ imageUrl: "" })
    }

    const toggleTrack1 = (e) => {
        settrackQuantity1(e.target.checked)
    }
    const toggleCon1 = (e) => {
        setcontinueSell1(e.target.checked)
    }
    const togglePhy1 = (e) => {
        setphysicalProduct1(e.target.checked)
    }

    useEffect(() => {
        setIsdisable1(trackQuantity === true ? false : true)
    }, [trackQuantity1])

    const hangle1 = (e) => {
        console.log(e)
        setpopuler1(e.target.checked)
    }
    const deleteTag = (tag) => {
        setetags(etags.filter(item => item !== tag))
    }
    const deleteImg = (img) => {
        if (eimg.length > 1) {
            seteimg(eimg.filter(item => item.imageUrl !== img))
        }
    }

    const addMp = (e, data) => {
        // console.log(e.target.checked, data)
        // setcount(e.target.checked === true ? count + 1 : count - 1)
        let ExactCount = count
        ExactCount = e.target.checked === true ? ExactCount + 1 : ExactCount - 1
        setcount(ExactCount)
        console.log(ExactCount)
        if(mostPopuler.length <= 8 && ExactCount <= 8){
            setIsdisable2(false)
            setMPID(MPID.concat({ id: data.id, populer: e.target.checked }))
        }
        else{
            setIsdisable2(true)
        }
    }

    const SubmitMplist = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API}/update-multi-printable`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: MPID })
            })
            const json = await response.json()
            if (json.success === true) {
                alert(json.msg)
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }
    const toggle = () =>{
        setHamtoggle(Hamtoggle === "translateX(-300px)" ? "translateX(0px)" : "translateX(-300px)")
        setbackopacity(backopacity === "1" ? "0.9" : "1")
    }
    const toggleDropCol = (e) =>{
        setCollection(e.target.value)
    }
    const toggleDropType = (e) =>{
        setType(e.target.value)
    }
    const toggleDropCat = (e) =>{
        setCategory(e.target.value)
    }

    return (

        <div style={{ width: "calc(100vw - 40px)", overflow: "hidden", maxWidth: "1440px", margin: "20px", display: mainDisplay, position: "relative" }}>
            <i style={{marginTop: "0px", textAlign: "start"}} className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i>
            <div className="desk-display-table" style={{ justifyContent: "space-around" }}>
                <Sidenav />
                <table className="table printable-table" style={{ display: listDisplay, opacity: backopacity }}>
                    <div className="d-flex my-" style={{justifyContent: "space-between",alignItems: "center"}}>
                        <h2>Products</h2>
                <button className='btn btn-primary' disabled={Isdisable2} onClick={SubmitMplist}>Update Most Populer</button>
                    </div>
                    <thead>
                        <tr>
                            <th scope="col">Most Populer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Inventory</th>
                            <th scope="col">Category</th>
                            <th scope="col">Vendor</th>
                            <th scope="col">Functions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mostPopuler.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row" key={index} style={{ display: "flex", alignItems: "center", borderBottom: "none", boxShadow: "none" }}>  <input className="form-check-input" defaultChecked={data.populer === true ? true : false} type="checkbox" onChange={(e) => addMp(e, data)} name="" id="flexCheckDefault" /> <img className='mx-2' style={{ height: "40px" }} src={data.illustrationImageUrl} alt="" /></td>
                                    <td style={{ width: "20%" }}>{data.name}</td>
                                    <td style={{textAlign: "center"}}>{data.quantity}</td>
                                    <td>{data.category}</td>
                                    <td>{data.sellerID}</td>
                                    <td>
                                        <i className="fa-regular fa-pen-to-square" onClick={() => editData(data)}></i>
                                        <i className="fas fa-trash mx-4" onClick={() => DeleteData(data.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}
                        {ListData.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td scope="row" key={index} style={{ display: "flex", alignItems: "center", borderBottom: "none", boxShadow: "none" }}>  <input className="form-check-input" defaultChecked={data.populer === true ? true : false} type="checkbox" onChange={(e) => addMp(e, data)} name="" id="flexCheckDefault" /> <img className='mx-2' style={{ height: "40px" }} src={data.illustrationImageUrl} alt="" /></td>
                                    <td style={{ width: "20%" }}>{data.name}</td>
                                    <td style={{textAlign: "center"}}>{data.quantity}</td>
                                    <td>{data.category}</td>
                                    <td>{data.sellerID}</td>
                                    <td>
                                        <i className="fa-regular fa-pen-to-square"  style={{fontSize: "16px"}} onClick={() => editData(data)}></i>
                                        <i className="fas fa-trash mx-4"  style={{fontSize: "16px"}} onClick={() => DeleteData(data.id)}></i>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="mobile-display-table" style={{ justifyContent: "space-around" }}>
                <Sidenav />
                <table className="table printable-table" style={{ display: listDisplay, opacity: backopacity }}>
                    <div className="d-flex top-bar" style={{justifyContent: "space-between", alignItems: "center"}}>
                        <h2>Products</h2>
                <button className='btn btn-primary' disabled={Isdisable2} onClick={SubmitMplist}>Update Most Populer</button>
                    </div>
                    <tbody>
                        {mostPopuler.map((data, index) => {
                            return (
                                <div className="mobilelist" key={index}>
                                    <div className="details-list">
                                    <input className="form-check-input" defaultChecked={data.populer === true ? true : false} type="checkbox" onChange={(e) => addMp(e, data)} name="" id="flexCheckDefault" /> 
                                        <img className='' style={{ height: "40px" }} src={data.illustrationImageUrl} alt="" />
                                        <div style={{marginLeft: "15px"}}>
                                            <h4>{data.name.slice(0, 15)} ..</h4>
                                            <p>{data.quantity} in stock</p>
                                            <span>{data.sellerEmail === undefined ? "THE YOUNG MINDS" : data.sellerEmail}</span>
                                        </div>
                                    </div>
                                    <div className="details-action">
                                  
                                        {/* <p>{data.status}</p> */}
                                        <i className="fa-regular fa-pen-to-square mx-3" style={{fontSize: "16px"}} onClick={() => editData(data)}></i>
                                        <i className="fas fa-trash"  style={{fontSize: "16px"}} onClick={() => DeleteData(data.id)}></i>
                                    </div>
                                </div>
                            )
                        })}
                        {ListData.map((data, index) => {
                            return (
                                <div className="mobilelist" key={index}>
                                <div className="details-list">
                                <input className="form-check-input" defaultChecked={data.populer === true ? true : false} type="checkbox" onChange={(e) => addMp(e, data)} name="" id="flexCheckDefault" /> 
                                    <img className='' style={{ height: "40px" }} src={data.illustrationImageUrl} alt="" />
                                    <div style={{marginLeft: "15px"}}>
                                        <h4>{data.name.slice(0, 15)} ..</h4>
                                        <p>{data.quantity} in stock</p>
                                        <span>{data.sellerEmail === undefined ? "THE YOUNG MINDS" : data.sellerEmail}</span>
                                    </div>
                                </div>
                                <div className="details-action">
                              
                                    {/* <p>{data.status}</p> */}
                                    <i className="fa-regular fa-pen-to-square mx-3" onClick={() => editData(data)}></i>
                                    <i className="fas fa-trash" onClick={() => DeleteData(data.id)}></i>
                                </div>
                            </div>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <form className='product-form' style={{ display: editDisplay, opacity: backopacity }}>
                <p style={{fontWeight: "600"}}>Protuct Detail</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" className="form-control" onChange={handleChange1} name="name" value={editForm.name} id="exampleInputText1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                    <textarea rows={5} type="text" className="form-control" name="description" onChange={handleChange1} value={editForm.description} id="exampleInputText1" />
                </div>
                <p style={{fontWeight: "600"}}>Media</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Stl file</label>
                    <input type="text" name="url" value={editForm.url} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
                    <input type="text" className="form-control" name="illustrationImageUrl" onChange={handleChange1} value={editForm.illustrationImageUrl} id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Side Images</label>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                        <input type="text" name="imageUrl" value={editImage.imageUrl} onChange={handleImg1} className="form-control" id="exampleInputText1" />
                        <button onClick={storeImage1} className='btn btn-primery'>Add</button>
                    </div>
                </div>
                {eimg.map((data, index) => {
                    return <div className="d-flex my-2" key={index} style={{ alignItems: "center", width: "100%" }}> <img className='mx-3' src={data.imageUrl} alt="" style={{ height: "50px", width: "50px" }} /> <p style={{ color: "red" }} onClick={() => deleteImg(data.imageUrl)} className="mx-3">X</p></div>
                })}
                <p style={{fontWeight: "600"}}>Pricing</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="number" name="price" value={editForm.price} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Comparing Price</label>
                    <input type="number" name="priceCompare" value={editForm.priceCompare} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultChecked={true} disabled={true} name="tax" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Charge Tax
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Cost per item</label>
                    <input type="number" name="costPerItem" value={editForm.costPerItem} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>

                <p style={{fontWeight: "600"}}>Inventory</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Sku</label>
                    <input type="text" name="sku" value={editForm.sku} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={trackQuantity1} onChange={toggleTrack1} name="trackQuantity" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Track Qunatity
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={continueSell1} disabled={Isdisable1} onChange={toggleCon1} name="continueSell" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Continue Selling When out of stock
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">location</label>
                    <input type="text" name="location" value={editForm.location} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                    <input type="number" name="quantity" value={editForm.quantity} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <p style={{fontWeight: "600"}}>Shipping</p>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={physicalProduct1} onChange={togglePhy1} name="physicalProduct" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        This is physical product
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>
                    <input type="text" name="weight" value={editForm.weight} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Country of Origin</label>
                    <input type="text" name="origin" value={editForm.origin} onChange={handleChange1} className="form-control" id="exampleInputText1" />
                </div>
                <p style={{fontWeight: "600"}}>SEO</p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Page Title</label>
                    <input type="text" name="pageTitle" value={editForm.pageTitle} onChange={handleChange1} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Meta Description</label>
                    <textarea type="text" name="metaDescription" value={editForm.metaDescription} onChange={handleChange1} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Url Handler</label>
                    <input type="text" name="slug" value={editForm.slug} onChange={handleChange1} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">publishedAt</label>
                    <input type="text" className="form-control" placeholder='yyyy/mm/dd' name="publishedAt" onChange={handleChange1} value={editForm.publishedAt} id="exampleInputText1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Collection :</label>
                        <select className='btn btn-small-outline-primery mx-2' value={Collection} onChange={toggleDropCol} style={{color: "#000"}} id="cars" name="cars">
                            <option value="initial">Select</option>
                            <option value="Education">Education</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Type :</label>
                        <select className='btn btn-small-outline-primery mx-2' value={Type} onChange={toggleDropType} style={{color: "#000"}} id="cars" name="cars">
                            <option value="initial">Select</option>
                            <option value="Printable">3D Printable</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category :</label>
                        <select className='btn btn-small-outline-primery mx-2' value={category} onChange={toggleDropCat} style={{color: "#000"}} id="cars" name="cars">
                            <option value="initial">Select</option>
                            <option value="SCIENCE">Science</option>
                            <option value="TECHNOLOGY">Technology</option>
                            <option value="ENGINEERING">Engineering</option>
                            <option value="ARTS">Arts</option>
                            <option value="MATHEMATICS">Mathematics</option>
                            <option value="OTHERS">Others</option>
                        </select>
                    </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                    <input type="text" className="form-control" name="category" onChange={handleChange1} value={editForm.category} id="exampleInputText1" />
                </div> */}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" checked={populer1} onChange={hangle1} name="populer" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Most Populer
                    </label>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Tags</label>
                    <div className="d-flex" style={{ alignItems: "center" }}>
                        <input type="text" value={editTag} onChange={HandleTag1} className="form-control" id="exampleInputText1" />
                        <button onClick={storeTag1} className='btn btn-primery'>Add</button>
                    </div>
                </div>
                {etags.map((data, index) => {
                    return <div className="d-flex" key={index}><p className='mx-2'>  {data}</p> <p style={{ color: "red" }} className="mx-3" onClick={() => deleteTag(data)}>X</p></div>
                })}

                <button type="submit" className="btn btn-primary" onClick={HandleSubmit1}>Submit</button>
            </form>
        </div>
    )
}

export default Addproduct
