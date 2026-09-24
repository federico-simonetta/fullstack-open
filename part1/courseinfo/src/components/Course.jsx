const Header = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}

const Content = ({ parts }) => {
  const total = parts.reduce((accum, currentValue) => accum + currentValue.exercises, 0)
  return (
    <div>
      {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)}
      <Total total={total}/>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Total = ({total}) => {
  return(
    <h4>total of {total} exercises</h4>
  )
}

const Course = ({ course }) => {
  return (
    <>
      <Header title={course.name} />
      <Content parts={course.parts}/>
    </>
  )
}

export default Course;