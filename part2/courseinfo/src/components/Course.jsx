const Header = ({course}) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = ({parts}) => {
    return (
      <p>{parts['name']} {parts['exercises']}</p>
    )
  }
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part)=>{
            return <Part parts = {part}/>
        })}
      </div>
    )
  }
  const Total = ({parts}) => {
    return(
      <strong>
          <p>total of {parts.reduce((total,part)=>{
            return total+part.exercises
          },0)} exercises</p>
      </strong>
    )
  }

const Course = ({course}) =>{
    console.log(course)
    return (
        course.map((course)=>{
            return (
                <div>
                    <Header course={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )
        })

    )
}

export default Course