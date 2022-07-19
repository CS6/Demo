import { cloneElement, useState } from "react"
// import { Footer } from "@cs6/branding"
import Title,{Doc} from "./Title"

export default function Intro({ children }) {
  const [clicked, setClicked] = useState(false)
  return (
    <>
    
        <div>
          
        </div>
      {cloneElement(children, { ready: clicked })}
      <div className={`fullscreen bg ready"} ${clicked && "clicked"}`}>
          
        <div className="stack">
          {/* <Doc/> */}
        <Title/>
          <a  className="Enter SimSun"  href="#" onClick={() => setClicked(true)}>
           <h2> {"請您稍等一會...."}</h2>
          </a>
        </div>
       
       
      </div>
     
    </>
  )
}
