import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { IconButton, Paper } from '@mui/material';
import Chips from './ChipComponent';
import GithubIcon from '@mui/icons-material/GitHub';
import PreviewIcon from '@mui/icons-material/Preview';
function CardComponent(props:any){

return  <Card className=' 
 md:max-w-sm mx-auto lg:max-w-md xl:ml-8 lg:ml-5 mb-8 max-w-xs xl:max-w-lg  ' sx={{
":hover":{
  color: 'white',
  boxShadow:' 0 5px 20px white',
      
   
} }} >
   <Image src={props.img} alt="GKA"  sizes='max-content' width='540' height='300' layout='responsive'  >

</Image>
  
       
     <CardContent className='bg-zinc-950' >
        <Typography gutterBottom variant="h5" component="div" className='flex flex-wrap text-white' >
        {props.name}
        <CardActions className= 'ml-auto'>
         <IconButton href={props.github} target='_blank'><GithubIcon fontSize='large'  className='text-green-500'/></IconButton>
        <IconButton href={props.link} target='_blank'><PreviewIcon fontSize='large' className='text-green-500'/></IconButton>    
      </CardActions>
     
 
     
        </Typography>
       <div className='flex flex-wrap items-left space-x-2 border-b pb-2 mb-2 border-gray-500' >
        <Chips  tech={props.tech}/></div>
        
        <Typography variant="body2" color="text.secondary" className=' mt-1 text-gray-400'>
          {props.description}
        </Typography>
      </CardContent>
     
    </Card>}
export default CardComponent;