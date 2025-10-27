import  Counter  from "./counter"

export default function Home (){
  return(
    <main>
      <center><header> <h1>Counter Project</h1></header></center>
      <br></br>
      <center> <h2>Counter Section</h2>
      <br></br>
        <Counter />
        <br></br>
        <h2>Custom Counter</h2>
        <br></br>
        <Counter initialCount={3} initialStep={2} />
      </center>
    </main>
  )
}
