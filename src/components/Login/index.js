import React, { useState } from "react";
import TimeLine from '../TimeLine'
import "./index.css";


const Login = () => {
  const [data, setData] = useState(null);

  const errorMessage = () => {
    document.querySelector('.form-header p').innerHTML = 'user not found, try again';
    document.querySelector('.content').classList.add('error');
    setTimeout(() => {
      document.querySelector('.content').classList.remove('error')
    }, 1000);
  }

  const getData = (userName) => {

    fetch(`https://api.github.com/users/${userName}/repos`, {
      method: "GET",
      headers: {
        "Accept": "application/vnd.github.v3+json"
      },

    })
      .then((result) => {
        return result.json()
      })
      .then(result => {
        if (result.message == "Not Found") {
          errorMessage();
          return
        }
        setData(result)
      })
      .catch(error => {
        console.log(error)
      })

  }

  const submitForm = (event) => {
    event.preventDefault();
    const userName = event.target[0].value
    getData(userName)
  }

  return (
    <>
      <div className="content ">
        <form onSubmit={submitForm}>
          <div className="form-header">
            <h1>GitHub Timeline</h1>
            <p>Enter your GitHub username ! :)</p>
          </div>
          <div className="mat-in">
            <input type="text" name="name" defaultValue={''} required />
            <span className="bar"></span>
            <label>Username</label>
          </div>
          <button name="submit" type="submit" id="login">
            Get My Timeline
          </button>
        </form>
      </div>

      {data ? <TimeLine data={data} /> : ''}
    </>
  )
}

export default Login;
