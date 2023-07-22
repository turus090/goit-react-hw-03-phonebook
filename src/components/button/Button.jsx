import s from"./button.module.css"
const Button = (props) => {
return (
    <button className={s.button} onClick={props.handleClick}>
        {props.text}
    </button>
)
}

export default Button