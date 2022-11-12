import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { useState } from "react";
import Master from "./Master";
import NewElement from "./NewElement";
const Data = () => {
  let [disable, setDisable] = useState(false);
  let [arr, setArr] = useState([]);
  let [second, setSecond] = useState([]);
  let data = JSON.parse(localStorage.getItem("data2")) || [];
  let data2=JSON.parse(localStorage.getItem("data3"))||[]
  let [copy, setCopy] = useState(false);
let [double,setDouble]=useState(false)
  let myFun = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    myFun();
  }, []);
  let checkCopy = (e) => {
    setCopy(e.target.checked);
  };
  let singleForward = () => {
    
    
    
  };

  let dbForward=()=>{
    if(copy){
     setDouble(true)
     setDisable(true)
     data=arr
     localStorage.setItem("data2",JSON.stringify(data))
    }
  }
  let singleBackward=()=>{
    
  }
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Checkbox sx={{ marginLeft: "280px" }} onClick={checkCopy} />
        <h3>COPY</h3>
        <Checkbox sx={{ marginLeft: "40px" }} />
        <h3>MOVE</h3>
      </Box>
      <Box sx={{ display: "flex", marginTop: "30px", width: "70%" }}>
        <Box
          sx={{
            width: 150,
            height: 60,
            border: "2px solid black",
            marginLeft: "350px",
            alignItems: "center",
            fontWeight: "bolder",
          }}
        >
          <h3>MASTER</h3>
        </Box>
        <Box
          sx={{
            width: 150,
            height: 60,
            border: "2px solid black",
            marginLeft: "390px",
          }}
        >
          <h3>NEW ELEMENTS</h3>
        </Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: 300,
            height: 500,
            border: "2px solid black",
            marginLeft: "300px",
            marginTop: "25px",
            marginRight: "60px",
            overflow: "scroll",
          }}
        >
          {arr.map((elem) => (
            <Master elem={elem} key={elem.id} disabl={disable} copy={copy} double={double} />
          ))}
        </Box>

        <Box
          sx={{
            width: 100,
            height: 260,
            border: "2px solid black",
            marginRight: "60px",
            marginTop: "150px",
          }}
        >
          <Box
            sx={{
              width: 35,
              height: 35,
              marginTop: "25px",
              marginLeft: "29px",
              border: "2px solid black",
              fontWeight: "bolder",
              textAlign: "center",
            }}
            onClick={singleForward}
          >
            {">"}
          </Box>
          <Box
            sx={{
              width: 35,
              height: 35,
              marginTop: "15px",
              marginLeft: "29px",
              border: "2px solid black",
              fontWeight: "bolder",
              textAlign: "center",
            }} onClick={singleBackward}
          >
            {"<"}
          </Box>
          <Box
            sx={{
              width: 35,
              height: 35,
              marginTop: "15px",
              marginLeft: "29px",
              border: "2px solid black",
              fontWeight: "bolder",
              textAlign: "center",
            }}  onClick={dbForward}   >
            {">>"}
          </Box>
          <Box
            sx={{
              width: 35,
              height: 35,
              marginTop: "15px",
              marginLeft: "29px",
              border: "2px solid black",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            {"<<"}
          </Box>
        </Box>

        <Box
          sx={{
            width: 300,
            height: 500,
            border: "2px solid black",

            marginTop: "25px",
          }}
        >
          {data.map((e) => (
            <NewElement e={e} copy={copy} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Data;
