import s from "./form.module.css"
import Button from "../button/Button"

const Form = (props) => {
return(
    <div className={s.form}>
        <p className={s.title}> Create new contact</p>
        <input className={s.wrapper}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={props.name}
        onChange={e=> props.setNameCandidate(e.target.value)}
        placeholder="Entry new name"
        />
        <input className={s.wrapper}
        type="tel"
        name="number"
        value={props.phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Entry new phone number"
        onChange={e=> props.setPhoneCandidate(e.target.value)}
        />
        <Button text="Add contact" handleClick={props.setNewCandidate}/>
    </div>
    )
}

export default Form