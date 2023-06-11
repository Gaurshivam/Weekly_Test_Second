import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";
import UserComp from "./UserComp";

const Users = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([])

  const GetData = () =>{
    fetch("https://randomuser.me/api/?results=20")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.results);
        setUser(data.results);
        setData(data.results)
    })
    }
    

  useEffect(()=>{
    GetData()
  },[])
  return (
    <div >
    <UserComp />
      <div style={{ margin: "20px" }}>
        <input type="radio" defaultChecked name="gender" value="all"  onChange={()=>{
            setUser(data)
        }}/>
        All
        <input type="radio" name="gender" value="male" onChange={()=>{
            setUser(data.filter((ele)=>ele.gender === "male"))
        }}/>
        Male
        <input type="radio" name="gender" value="female"  onChange={()=>{
            setUser(data.filter((ele)=>ele.gender === "female"))
        }}/>
        Female
      </div>
      <Table user={user}/>
    </div>
  );
};

export default Users;
