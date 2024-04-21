import React from 'react'
import { Link } from 'react-router-dom'


const AddSubject = () => {
  return (
    <div>
        <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/add-subject'}>Add subject</Link>
        </nav>

        <section>
            add subject
        </section>
    </div>
  )
}

export default AddSubject