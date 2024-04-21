import React from 'react'




const Login = () => {


  const handleSubmit = (values) => {
    console.log("login information", values)
  }

  return (
    <div>
        <h1>Login</h1>

        <form onSubmit={handleSubmit} method='post'>
          <input placeholder='Enter username' type='text' name='username' id='username' />
          <input placeholder='Enter password' type='password' name='password' id='password' />

          <button type='submit'>Login</button>
        </form>

    </div>
  )
}

export default Login