import React, {useContext, useState} from 'react'
import LearningMaterial from './LearningMaterial.json'
import NoteContext from "../context/notes/Notecontext"
const BlogLM = () => {
  const [ImgSLide, setImgSLide] = useState(0)
  const context = useContext(NoteContext)
    const { setLMBlog, LMBlog } = context
    const prevSlide = (steps)=>{
      setImgSLide(ImgSLide === 0 ? steps.length - 1 : ImgSLide + 1)
      console.log(steps.length)
    }
    const nextSlide = (steps)=>{
      setImgSLide(ImgSLide === steps.length - 1 ? 0 : ImgSLide + 1)
    }
  return (
    <div className='Learinig-Material-Blog'>
      
      {LearningMaterial.map((data, index)=>{
        return (
          <>
          {index === LMBlog && (
            <>
            <div style={{display: "block", width: "100%"}} className='mainHead'>

             <h1 className='Website_Heading' style={{display: "inline"}}>{data.Heading}</h1>
            </div>
             <img src="/image/Blogocean1.webp" className='blogimg2' alt="" />
             <h2 className='h2-blog-ocean'>Overview</h2>
             <p className='p-blog-ocean'>{data.Overview}</p>
             <h4 className='h4-blog-ocean overview-h4'>{data.Procedure}</h4>
             <h2 className='h2-blog-ocean'>{data.ProcedureHead}</h2>
             <div className="underLineUnder"></div>
             <div className="steps">
              {data.Steps.map((item, i)=>{
                return (
                  <div style={{ display : i === ImgSLide ? "grid": "none"}} key= {i}>
                     <img src="/image/Blogocean1.webp" className='blogimg2' alt="" />
                     <p className='p-blog-ocean'>{item.Para1}</p>
                  </div>
                )
              })}
              <div className="navBtn" style={{display : "flex" , justifyContent: "center", width: "100%"}}>
                <span className='fal fa-play' style={{ transform: "rotate(180deg)", marginRight: "100px", cursor: "pointer" }} onClick={()=>prevSlide(data.Steps)}></span>
                 <span className='fal fa-play' style={{cursor: "pointer"}} onClick={()=>nextSlide(data.Steps)}></span>
              </div>
             </div>
            </>
          )}
          </>
        )
      })}
      <h1 className='Website_Heading'></h1>
    </div>
  
  )
}

export default BlogLM