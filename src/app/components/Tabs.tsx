"use client"
import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '@mui/material/Unstable_Grid2';
import CardComponent from './Card';
import { TabContext } from '@mui/lab';
import web from "../data/web";
import All from "../data/All";
import mobile from "../data/mobile";
export default function Tabs() {
  const [value, setValue] = React.useState('1');
 
 

 
  const handleChange = (event: 
    React.SyntheticEvent, 
    newValue: string) => {
      console.log(newValue);
    setValue(newValue);
  };
  

  return (<>  <TabContext value={value}>
        
          <TabList   onChange={handleChange} centered >
            <Tab className='text-white'   label="All" value="1" />
            <Tab className='text-white' label="Web" value="2" />
            <Tab className='text-white' label="Mobile" value="3" />
          </TabList>
        
        <TabPanel value="1" > <Grid container spacing={0}   >
        {All.map((item,index)=>(
            <Grid  xs={12} lg={6} md={6}   key={index} >
         <CardComponent key={index}    name={item.name} img={item.img} 
         description={item.Description} tech={item.TechUsed} link={item.link}
         github={item.GithubLink}/>
           </Grid>  ))}
           </Grid>
    </TabPanel>
        <TabPanel value="2"><Grid container spacing={0}   >
          
          {web.map((item,index)=>(
            <Grid  xs={12} lg={6} md={6}   key={index} >
         <CardComponent key={index}    name={item.name} img={item.img} 
         description={item.Description} tech={item.TechUsed} link={item.link}
         github={item.GithubLink}/>
           </Grid>  ))}

   
</Grid></TabPanel>
        <TabPanel value="3">{ <Grid container spacing={0}   >
          
          {mobile.map((item,index)=>(
            <Grid  xs={12} lg={6} md={6}   key={index} >
         <CardComponent key={index}    name={item.name} img={item.img} 
         description={item.Description} tech={item.TechUsed} link={item.link}
         github={item.GithubLink?.toString()?? ''}/>
           </Grid>  ))}</Grid>}</TabPanel>
      </TabContext>
       
  </>  );
}
