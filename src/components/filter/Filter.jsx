import s from "./filter.module.css"
import { createRef } from "react"

const Filter = (props) => {
    let inputRef = createRef()
    const handleChange = () =>{
        console.log(inputRef.current.value)
        props.changeEvent(inputRef.current.value)
    }
    return(
        <div className={s.block}>
            <p className={s.text}>Find contacts by name</p>
            <input onChange={handleChange} ref={inputRef} className={s.inputFilter} placeholder="Entry name"/>
        </div>
    )
}

export default Filter