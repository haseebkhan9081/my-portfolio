"use client"
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { Chip, ListItem } from '@mui/material';
 
 
function Chips(props:any) {
    console.log("Chips Called!!");
     return <>
     
     {props.tech.map((tech:any,index:any) => {
        let icon;
 
          icon =  tech.icon;
          let bgcolor=tech.bgcolor
          console.log(bgcolor);
        return (
           
            <Chip
            sx={{ backgroundColor:`${bgcolor}`,
            color:`${tech.color}`,
          fontWeight:"bold", 
            
          }}
             
            key={index}
              icon={icon}
            label={tech.name}
            
            />
           
          
        );
      })}
    </>}
    export default Chips;