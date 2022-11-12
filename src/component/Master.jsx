import React, { useState } from 'react'
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
const Master = ({elem,disabl,copy,double}) => {

let[color,setColor]=useState(false)



    let element=(title)=>{
      if(copy){
        let obj={
          title:title
        }
      let data=JSON.parse(localStorage.getItem("data2"))||[]
 data.push(obj)
    localStorage.setItem("data2",JSON.stringify(data))  
        setColor(true)

    
    
   console.log(data)

      } 
    }
  

  return (
    <Box>
     { color ?  <Button disabled={disabl} onClick={()=>{element(elem.title)}} sx={{color:"red"}}>{elem.title}</Button>:<Button disabled={double} onClick={()=>{element(elem.title)}} sx={{color:"blue"}}>{elem.title}</Button>  }
    </Box>
  )
}

export default Master