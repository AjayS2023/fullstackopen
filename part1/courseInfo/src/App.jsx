const Header = (course) => {
  return(
    <>
      <p>{course.name}</p>
    </>
  )
};

const Content = (details) => {
  return(
    <>
      <Part name={details.part} num={details.exerciseNumber}/>
    </>
  )
};

const Part = (details) => {
  return(
    <>
      <p>{details.name} {details.num}</p>
    </>
  )
}
const Total = (total) => {
  return(
    <>
      <p>
        Number of exercises {total.first + total.second + total.third}
      </p>
    </>
  )  
};

const App = () => {
  
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  
  return(
    <div>
      <h1>
        <Header name={course}/>
      </h1>
      <p>
        <Content part={part1} exerciseNumber={exercises1}/>
      </p>
      <p>
        <Content part={part2} exerciseNumber={exercises2}/>
      </p>
      <p>
        <Content part={part3} exerciseNumber={exercises3}/>
      </p>
      <p>
        <Total first={exercises1} second={exercises2} third={exercises3}/>
      </p>
    </div>
  )
}


export default App
