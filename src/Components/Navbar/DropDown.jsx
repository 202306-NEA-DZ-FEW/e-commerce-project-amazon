import { useState } from "react"

const DropDown = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="relative">
      <button onClick={()=>setOpen(!open)}>click me</button>
      <div className ={ `${open? "block" : "hidden"} absolute`}>
      <h1>men</h1>
      <h1>women</h1>
      <h1>kids</h1>
      </div>
    </div>
  )
}

export default DropDown