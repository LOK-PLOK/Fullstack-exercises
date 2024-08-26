import Person from './Person'

const Persons = ({persons}) =>{
    return(
        persons.map((person) => {
            return (
                <div>
                    <Person person ={person}/>
                </div>
            )
        })
    )
}

export default Persons