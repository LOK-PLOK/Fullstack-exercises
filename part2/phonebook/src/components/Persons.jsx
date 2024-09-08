import Person from './Person'
const Persons = ({persons , handleDelete}) =>{
    return(
        persons.map((person) => {
            return (
                <div key={person.id}>
                    <Person person ={person} handleDelete = {handleDelete}/>
                </div>
            )
        })
    )
}

export default Persons