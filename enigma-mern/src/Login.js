import React, {useEffect,useState } from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import { ToastContainer, toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function Login(props) {

  let history = useHistory()

  const [users, setUsers] = useState([]);
  const [loginId, setLoginId] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const url = "http://localhost:9000";

  const loginErr = () => {
      toast.error('Incorrect ID!', {
          position: toast.POSITION.TOP_CENTER,
      })
  }

  const loginSucc = () => {
    toast.success('Welcome to Enigma', {
        position: toast.POSITION.TOP_CENTER,
    })
}

  useEffect(() => {
    async function fetchUsers() {
      const request = await axios.get(`${url}/users`);
      setUsers(request.data.users);
      return;
    }
    fetchUsers();
  }, [url]);

  async function loginUser(e) {
    e.preventDefault();
    const id = loginId;
    console.log(loginId);
    axios
      .post(`${url}/login/` + id)
      .then((res) => {
        localStorage.setItem(
          "authorization",
          "Bearer " + res.data.authorization
        );
        setLoginStatus(true);
        history.push('/app')
      })
      .catch((error) => {
        console.log(error);
        setLoginStatus(false);
        loginErr();
      });
  }

  const authCheck = () => {
    axios
      .get(`${url}/login/` + loginId, {
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      })
      .then((res) => {
        //alert("yes you are authorized!");
      });
  };

  const handleSubmit = (e) => {
    setLoginId(e.target.value);
  };

  return (
    <div className="enigma-login">
      <ToastContainer
        position="top-center"
        autoClose={3500}
        hideProgressBar={!true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
      <h1>
        Enigma <span>Chat</span> 💙
      </h1>
      <form onSubmit={loginUser}>
        <input
          value={loginId}
          onChange={handleSubmit,() => props.getData(loginId)}
          type="text"
          required
          placeholder="enter enigma id"
        ></input>
        <br />
        <button onClick={authCheck} type="submit">
          Login 🚀
        </button>
      </form>
    </div>
  );
}

export default Login;
