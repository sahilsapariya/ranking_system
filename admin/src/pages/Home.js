import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/add-subject'}>Add subject</Link>
        </nav>

        <section>
            Home page
        </section>
    </div>
  )
}

export default Home