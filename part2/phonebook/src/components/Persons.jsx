import Person from './Person'

const Persons = ({persons}) =>{
    return(
        persons.map((person) => {
            return (
                <div key={person.id}>
                    <Person person ={person}/>
                </div>
            )
        })
    )
}

export default Persons