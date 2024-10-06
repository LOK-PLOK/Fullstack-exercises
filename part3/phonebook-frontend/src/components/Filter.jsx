const Filter = ({find,search,handleNewSearch}) =>{
      return(
      <form onChange={find}> 
        <div>filter shown with</div>
        <input value={search} onChange={handleNewSearch}/>
      </form>
      )
}

export default Filter