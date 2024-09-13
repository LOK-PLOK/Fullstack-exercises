const Form = ({handleSubmit, handleSearch}) =>{
    return(
        <form onSubmit={handleSubmit}> 
          find countries.
          <input onChange={handleSearch}/>
        </form>
        )
}

export default Form