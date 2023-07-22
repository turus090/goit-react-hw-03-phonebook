const contacts = [
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
        name:"Bob0",
        phone: 123
      }
]

let nameCandidate = "Bob"

let result = false 
 contacts.forEach(contact =>{
    if (contact.name == nameCandidate) {
        result = true
    }
})

console.log(result)