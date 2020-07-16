import React from "react";
import axios from "axios";

function Create() {
  this.state = {
    text: "",
  }
  
  function postHandle () {
    axios.post("https://fir-app-7a218.firebaseio.com/blogpost.json",{
      blog: {
        title: "This is the title",
        body: "this is the body",
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  
  function getInputHandle(props){
    this.setState({
      text: props.target.value,
    });
    console.log(props);
  };

    return( 
    <div>
        <h2>Create</h2>
        <div>Title</div>
        <input/>
        <div>Content</div>
        <input type="text" onChange={(e) => this.getInputHandle(e)}></input>
        <button onClick={postHandle()}>Enter</button>
    </div>
    )
  }

export default Create;