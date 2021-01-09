import React from 'react';
import {Typography,Grid,Box} from '@material-ui/core'
import Typed from 'react-typed'
import css from './new.css'
import image from './jabir.jpg'
import Avatar from '@material-ui/core/Avatar'
const Port = () => {
    return ( 
        <Box display="flex" flexDirection="column" alignItems="center" className={CSS.backgroundimage} style={{backgroundImage:'url(https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-black-minimalist-atmospheric-wooden-background-backgroundwooden-backgroundtree-texture-image_77053.jpg )',
        
        height:700,
    
        
        
        
        
        }}>
            <Avatar  img src={image} style={{
                      backgroundColor: "red",
                      borderRadius: 120,
                      margin: 50,
                      width: 200,
                      height: 200,
                      
                    }} />


            <Typography variant='h2' style={{color:'pink'}}>
                <Typed strings={['Sheikh Mohammad Jabir Abdullah Al-Mamun']} 
                typeSpeed = {10}/>
            </Typography>

            <Typography variant='h3' style={{color:'GrayText'}}>
                <Typed strings= {['Sheikh Jabir']}
                 typeSpeed = {100} backSpeed = {30} />
            </Typography>

            <Typography variant='h4' style={{color:'lightgray'}}>
                <Typed strings={['BSc in CSE at DIU','Web Application Developer at FORBIT']} typeSpeed={100}/>
            </Typography>
        </Box>
     );
}
 
export default Port;