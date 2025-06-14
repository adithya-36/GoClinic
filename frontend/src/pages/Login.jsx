import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Sign Up')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    if (state === 'Sign Up') {
      // Handle Sign Up logic
      console.log('Signing Up:', { name, email, password })
    } else {
      // Handle Login logic
      console.log('Logging In:', { email, password })
    }
  }
  return (
    <div>
      <form className='min-h-[80vh] flex items-center '>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
          <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book an appointment</p>
          {
            state === 'Sign Up' && (
              <div className='w-full'>
                <p>Full Name</p>
                <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
            )
          }
          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === 'Sign Up' ? 'Sign Up' : 'Login'}</button>
          {
            state === "Sign Up"
              ? <p>Already have an account? <span className='text-primary cursor-pointer' onClick={() => setState('Login')}>Login here</span></p>
              : <p>Create a new account? <span className='text-primary cursor-pointer' onClick={() => setState('Sign Up')}>Click here</span></p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login