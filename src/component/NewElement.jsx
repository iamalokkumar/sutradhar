import { Box, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'


const NewElement = ({e}) => {

  let[sbDisable,setsbDisable]=useState(false)
  let[color,setColor]=useState(false)

  
let singleBackward=(e)=>{
     setsbDisable(true)
     setColor(true)
     let data=JSON.parse(localStorage.getItem("data3"))||[]
    let obj={
      title:e.title
    }
    data.push(obj)
    localStorage.setItem("data3",JSON.stringify(data))
}

  return (
   <Box>
    {color ?  <Button disabled={false} onClick={()=>{singleBackward(e)}} sx={{color:"red"}}>{e.title}</Button> : <Button disabled={false} onClick={()=>{singleBackward(e)}} sx={{color:"blue"}}>{e.title}</Button>}
    
    
   </Box>
  )
}

export default NewElement