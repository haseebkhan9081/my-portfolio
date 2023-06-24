import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';



function NavBarButton(){

return <>
<Tooltip title="Click to view my Github" arrow>
           <IconButton href="https://github.com/haseebkhan9081">
         <GitHubIcon  className='text-green-500' fontSize='large'/>
         </IconButton></Tooltip>
    <Tooltip title="Home" arrow>
          <Link href="/">   <IconButton  >
        < HomeOutlinedIcon className='text-green-500' fontSize='large' />
         </IconButton></Link></Tooltip>
      <Tooltip title=" Resume" arrow>   
      
      <IconButton><DescriptionOutlinedIcon fontSize='large' className='text-green-500 '/></IconButton>
           </Tooltip>


<Tooltip title="Click to send me an email" arrow>
<IconButton href="aa9081haseeb@gmail.com"><EmailOutlinedIcon fontSize='large' className='text-green-500'/></IconButton>
</Tooltip>
<Tooltip title="Click to connect with me on LinkedIn" arrow>
<IconButton ><LinkedInIcon className='text-green-500 ' fontSize='large'/></IconButton>
</Tooltip>
</>



}

export default NavBarButton;