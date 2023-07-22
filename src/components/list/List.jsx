import ListItem from "./ListItem"
import s from "./list.module.css"

const List = (props) => {
    let listCollection = props.list.map(item => <ListItem key={item.id} id={item.id} name={item.name} phone={item.phone} deleteContact={props.deleteContact}/>)
    return (
        <ul>
            {listCollection}
            {props.list.length === 0 ? <p className={s.messege}>No items in list</p> : null}
        </ul>
        )
    }


export default List