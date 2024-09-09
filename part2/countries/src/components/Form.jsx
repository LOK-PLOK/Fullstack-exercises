const Form = ({handleSubmit, handleSearch}) =>{
    return(
        <form onChange={handleSubmit}> 
          find countries.
          <input onChange={handleSearch}/>
        </form>
        )
}

export default Form