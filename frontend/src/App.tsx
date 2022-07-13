import Header from "./compenents/header"
import SalesCard from "./compenents/SalesCard"

function App() {
  return(
    <>
   <Header/>
    <main>
      <section id="sales">
        <div className="Main-container">
          <SalesCard/>
        </div>
      </section>
    </main>
   </>
  )
}

export default App
