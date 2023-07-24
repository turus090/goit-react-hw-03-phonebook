import { Component } from "react";
import { nanoid } from "nanoid";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Filter from "./filter/Filter"; 
import Form from "./form/Form";
import List from "./list/List";

import s from "./app.module.css";
import search from "assets/search";



class App extends Component {
  state = {
    contacts: [
      {
        id:1,
        name:"John",
        phone: 123
      },
      {
        id:21,
        name:"John Smith",
        phone: 123
      },
      {
        id:3,
        name:"Bob",
        phone: 123
      },
    ],
    searchResults: [],
    searchValue: '',
    name: '',
    phone: '',
    status: 'viewList',
  }
  componentDidMount() {
    let contacts = JSON.parse(localStorage.getItem('contact'))
    if (contacts) {
      this.setState({
        ...this.state,
        contacts: [
          ...contacts
        ]
      })
    }
  }
  componentDidUpdate(){
    localStorage.setItem("contact", JSON.stringify(this.state.contacts));
  }

  deleteContact = (idCandidate) => {
    this.setState({
      ...this.state,
      contacts: this.state.contacts.filter(contact => contact.id !== idCandidate)
    }, this.startSearch)
  }

  startSearch = () => {
    this.setState({
      ...this.state,
      searchResults: this.state.contacts.filter(contactItem=>{
        if (search(contactItem.name, this.state.searchValue)) {
          return contactItem
        } else {
          return null 
        }
      }),
    })
  }
changeSearchInput = (searchText) => {
  if (searchText.length === 0){
    this.setState( {
      ...this.state,
      searchValue: '',
      searchResults: [],
      status:'viewList'
    })
  } else { 
    this.setState({
      ...this.state,
      searchValue: searchText,
      status: 'search'
    }, this.startSearch)
  }
}



setNameCandidate = (nameCandidate) => {
  this.setState({
    ...this.state,
    name: nameCandidate
})
}
setPhoneCandidate = (phoneCandidate) => {
  this.setState({
    ...this.state,
    phone: phoneCandidate
})
}

setNewCandidate = () =>{
  if ( this.state.name.length === 0 || this.state.phone.length === 0) {
    Notify.warning("Please enter  name or phone number")
  } else {
    let result = false 
    this.state.contacts.forEach(contact => {
      if (contact.name === this.state.name){
        result = true}
    })
    if (result) {
      Notify.warning(`${this.state.name} is already in contact`)
    } else {
      this.setState({
        name: '',
        phone: '',
        contacts: [
          ...this.state.contacts,
          {
            id: nanoid(),
            name: this.state.name,
            phone: this.state.phone
          }
        ]
      })
    }
   
  }
}
// status - viewList - search 
  render() {
      
    
    return (
      <div>
      <h2 className={s.title}>Phonebook</h2>
      <Form 
        setNameCandidate={this.setNameCandidate} 
        setPhoneCandidate={this.setPhoneCandidate} 
        setNewCandidate={this.setNewCandidate}
        name={this.state.name}
        phone={this.state.phone}
      />
      <Filter changeEvent = {this.changeSearchInput}/>
      <List 
        list={this.state.status==="viewList" ? this.state.contacts : this.state.searchResults}
        deleteContact={this.deleteContact} 
        />

      </div>
    )
  }
}
export default App
