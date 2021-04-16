import React from 'react'

function Register() {
    return (
        <div className="enigma-login">
        <h1>
          Enigma <span>Chat</span> 💙
        </h1>
        <form onSubmit>
          <input
            //value={First Name}
            //onChange={}
            type="text"
            required
            placeholder="enter enigma id"
          ></input>
          <br/>
          <input
            //value={}
            //onChange={}
            type="text"
            required
            placeholder="enter enigma id"
          ></input>
          <br />
          <button onClick type="submit">
            Login 🚀
          </button>
          <p>New user? <a href='/register'>Register!</a></p>
        </form>
      </div>
    )
}

export default Register
