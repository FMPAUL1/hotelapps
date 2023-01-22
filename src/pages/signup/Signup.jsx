import React from 'react'

function Signup() {
  return (
    <div className='parent'>
    <div className='main'>
      <div className='left'>
<h1>WELCOME TO ATP PORTAL</h1>
<button>Sign in</button>
      </div>
      <div className='right'>
<h1>Create Account</h1>
<form>
  <input type="text" name="name" placeholder="name"/>
  <input type="email" name="email"/>
  <input type="password" name="password"/>
  <button type="submit" > SIGNUP</button>
</form>
      </div>

    </div>
    </div>
  )
}

export default Signup