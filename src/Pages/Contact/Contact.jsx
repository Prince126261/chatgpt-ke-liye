import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='main'>
        <h1>Contact Us</h1>
        <p>For any queries, please contact us at: <code>8882368946</code></p>
        <h2>Here You can Submit Your Suggestion/Problem:</h2>
       <div className="left">
       <form onSubmit={(e) => e.preventDefault() 
        || alert('Your message has been submitted successfully!')
        || e.target.reset()
       }>          
          <label>Name: </label>
            <input type='text' placeholder='Enter Your Name' required></input>
            <br></br>
            <label>Email: </label>
            <input type='email' placeholder='Enter Your Email' required></input>
            <br></br>
            <label>Message: </label>
            <textarea placeholder='Enter Your Message' required></textarea>
            <br></br>
            <button id="submit" type='submit'>Submit</button>
        </form>
       </div>


    </div>
  )
}

export default Contact