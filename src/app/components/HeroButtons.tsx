
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from "next/link";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
 


function HeroButton(){

return <>
<Tooltip title="Click to view my Github" arrow>
           <IconButton href="https://github.com/haseebkhan9081"  size='large'>
         <GitHubIcon  className='text-green-500' fontSize='large'/>
         </IconButton></Tooltip>
    <Tooltip title="Click to view my projects" arrow>
          <Link href="../Projects">   <IconButton  >
        < WorkOutlineIcon className='text-green-500' fontSize='large' />
         </IconButton></Link></Tooltip>
      <Tooltip title="Click to view my resume" arrow>   
      
      <IconButton className='' href='https://drive.google.com/file/d/1suV1Ds6j_CohVuGKJoKC7lKx5gwqwJqw/view?usp=sharing'><DescriptionOutlinedIcon className='text-green-500' fontSize='large'   /></IconButton>
           </Tooltip>
 
              

<Tooltip title="Click to send me an email" arrow>
<IconButton href="mailto:aa9081haseeb@gmail.com?subject=Hello%20from%20Website"><EmailOutlinedIcon className='text-green-500' fontSize='large'/></IconButton>
</Tooltip>
<Tooltip title="Click to connect with me on LinkedIn" arrow>
<IconButton href="https://www.linkedin.com/in/haseeb-khan-a5013a1b0/" ><LinkedInIcon className='text-green-500 ' fontSize='large'/></IconButton>
</Tooltip>
</>



}

export default HeroButton;