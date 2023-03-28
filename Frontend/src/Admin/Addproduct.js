import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import NoteContext from "../context/notes/Notecontext"
import Sidenav from './Sidenav'

const Addproduct = () => {
    const context = useContext(NoteContext)
    const { backopacity, setbackopacity, Hamtoggle, setHamtoggle } = context

    const [tags, settags] = useState([])

    const [dtags, setdtags] = useState("")
    const [populer, setpopuler] = useState(false)
    const [dimg, setdimg] = useState({ imageUrl: "" })
    const [editImage, seteditImage] = useState({ imageUrl: "" })
    const [img, setimg] = useState([])
    const [listData, setListData] = useState([])
    const [AllData, setAllData] = useState([])
    const [mostPopuler, setmostPopuler] = useState([])
    const [trackQuantity, settrackQuantity] = useState(true)
    const [continueSell, setcontinueSell] = useState(true)
    const [physicalProduct, setphysicalProduct] = useState(false)
    const [Isdisable, setIsdisable] = useState(false)

    const [category, setCategory] = useState("initial")
    const [Collection, setCollection] = useState("initial")
    const [Type, setType] = useState("initial")

    // const { id } = useParams()
    const History = useHistory()

    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        // id: "",
        url: "",
        price: 0,
        tax: true,
        pageTitle: "",
        sellerID: "",
        sellerEmail: "",
        priceCompare: 0,
        metaDescription: "",
        costPerItem: 0,
        quantity: 1,
        weight: "",
        origin: "",
        location: "",
        sku: "",
        illustrationImageUrl: "",
        publishedAt: "",
        description: ""
        // tags: [],
        // illustrations: []
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
            }
            else {
                History.push('/admin-login')
            }
            // console.log(first)
        } catch (error) {
            History.push('/admin-login')
            // setWarning("Sorry! Some error occured !!")
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
            }
            // console.log(first)
        } catch (error) {
            // setWarning("Sorry! Some error occured !!")
            console.log(error)
            // document.getElementById("n").click();
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const HandleSubmit = async (e) => {
        const data = formData;
        data.tags = tags
        data.illustrations = img
        data.populer = populer
        data.trackQuantity = trackQuantity
        data.continueSell = continueSell
        data.physicalProduct = physicalProduct
        data.price = parseInt(formData.price)
        data.costPerItem = parseInt(formData.costPerItem)
        data.priceCompare = parseInt(formData.priceCompare)
        data.quantity = parseInt(formData.quantity)
        data.category = category
        data.type = Type
        data.collection = Collection
        console.log(data)
        e.preventDefault()
        if (data.name !== "" && data.url !== "" && data.price !== 0 && data.quantity > 0 && data.sku !== "" && data.illustrationImageUrl !== "" && data.category !== "initial" && data.description !== "" && data.tags.length > 0 && data.illustrations.length >= 2 && data.Collection !== "initial" && data.type !== "initial") {
            try {
                const response = await fetch(`${process.env.REACT_APP_API}/upload-printable`, {
                    method: 'POST',
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
        else{
            alert("Please fill all the fields before adding")
        }
    }

    const HandleTag = (e) => {
        setdtags(e.target.value)
    }
    const storeTag = (e) => {
        e.preventDefault()
        settags(tags.concat(dtags))
        setdtags("")
        console.log(formData)
    }


    const handleImg = (e) => {
        const { name, value } = e.target;
        setdimg((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }
    const storeImage = (e) => {
        e.preventDefault()
        setimg(img.concat(dimg))
        setdimg({ imageUrl: "" })
    }

    const hangle = (e) => {
        console.log(e)
        setpopuler(e.target.checked)
    }

    const toggleTrack = (e) => {
        settrackQuantity(e.target.checked)
    }

    const toggleCon = (e) => {
        setcontinueSell(e.target.checked)
    }
    const togglePhy = (e) => {
        setphysicalProduct(e.target.checked)
    }

    useEffect(() => {
        setIsdisable(trackQuantity === true ? false : true)
    }, [trackQuantity])

    const toggle = () => {
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
        <div style={{ width: "calc(100vw - 40px)", maxWidth: "1440px", margin: "20px", position: "relative" }}>
            <i style={{ marginTop: "0px", textAlign: "start" }} className="fa-solid fa-bars hamburger-menu" onClick={toggle}></i>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <Sidenav />
                <form className='product-form' style={{}}>
                    <p style={{ fontWeight: "600" }}>Add A Product</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                        <input type="text" className="form-control" onChange={handleChange} name="name" value={formData.name} id="exampleInputText1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">description</label>
                        <textarea type="text" className="form-control" name="description" onChange={handleChange} value={formData.description} id="exampleInputText1" />
                    </div>
                    <p style={{ fontWeight: "600" }}>Media</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Images</label>
                        <input type="text" className="form-control" name="illustrationImageUrl" onChange={handleChange} value={formData.illustrationImageUrl} id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Side Image</label>
                        <div className="d-flex" style={{ alignItems: "center" }}>
                            <input type="text" name="imageUrl" value={dimg.imageUrl} onChange={handleImg} className="form-control" id="exampleInputText1" />
                            <button onClick={storeImage} className='btn btn-primery'>Add</button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Stl File(if multiple then share zip)</label>
                        <input type="text" name="url" value={formData.url} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <p style={{ fontWeight: "600" }}>Pricing</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                        <input type="number" name="price" value={formData.price} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Comparring Price</label>
                        <input type="number" name="priceCompare" value={formData.priceCompare} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked={true} disabled={true} name="tax" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Charge Tax
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Cost per item</label>
                        <input type="number" name="costPerItem" value={formData.costPerItem} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <p style={{ fontWeight: "600" }}>Inventory</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Sku</label>
                        <input type="text" name="sku" value={formData.sku} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={trackQuantity} onChange={toggleTrack} name="trackQuantity" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Track Qunatity
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={continueSell} disabled={Isdisable} onChange={toggleCon} name="continueSell" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Continue Selling When out of stock
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Quantity</label>
                        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <p style={{ fontWeight: "600" }}>Shipping</p>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={physicalProduct} onChange={togglePhy} name="physicalProduct" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            This is physical product
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Weight</label>
                        <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Country of Origin</label>
                        <input type="text" name="origin" value={formData.origin} onChange={handleChange} className="form-control" id="exampleInputText1" />
                    </div>
                    <p style={{ fontWeight: "600" }}>SEO</p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Page Title</label>
                        <input type="text" name="pageTitle" value={formData.pageTitle} onChange={handleChange} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Meta Description</label>
                        <textarea type="text" name="metaDescription" value={formData.metaDescription} onChange={handleChange} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Url Handler</label>
                        <input type="text" name="slug" value={formData.slug} onChange={handleChange} className="form-control" id="exampleInputText1" aria-describedby="emailHelp" />
                    </div>

                    {/* <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">id</label>
            <input type="text" name="id" value={formData.id} onChange={handleChange} className="form-control" id="exampleInputText1" />
        </div> */}

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">publishedAt</label>
                        <input type="text" className="form-control" placeholder='yyyy/mm/dd' name="publishedAt" onChange={handleChange} value={formData.publishedAt} id="exampleInputText1" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Collection</label>
                        <select className='btn btn-small-outline-primery' onChange={toggleDropCol} style={{color: "#000"}} id="cars" name="cars">
                            <option value="initial">Select</option>
                            <option value="Education">Education</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Type</label>
                        <select className='btn btn-small-outline-primery' onChange={toggleDropType} style={{color: "#000"}} id="cars" name="cars">
                            <option value="initial">Select</option>
                            <option value="Printable">3D Printable</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                        <select className='btn btn-small-outline-primery' onChange={toggleDropCat} style={{color: "#000"}} id="cars" name="cars">
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
                        <input type="text" className="form-control" name="category" onChange={handleChange} value={formData.category} id="exampleInputText1" />
                    </div> */}
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked={populer} onChange={hangle} name="populer" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Most Populer
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tags</label>
                        <div className="d-flex" style={{ alignItems: "center" }}>
                            <input type="text" value={dtags} onChange={HandleTag} className="form-control" id="exampleInputText1" />
                            <button onClick={storeTag} className='btn btn-primery'>Add</button>
                        </div>
                    </div>
                    <div>
                        {tags.map((data, index) => {
                            return <span key={index}>{data}</span>
                        })}
                    </div>

                    <button type="submit" className="btn btn-primery" onClick={HandleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Addproduct
