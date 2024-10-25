import Cards from "./cards"
import Filters from "./filter"
import "./style.css"

const Content = () => {
  return (
    <section className='courses-content'>
      <Filters/>
      <Cards/>
    </section>
  )
}

export default Content
