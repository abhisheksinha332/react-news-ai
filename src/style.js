import {makeStyles} from '@material-ui/core/styles';


const styles = makeStyles((theme)=>({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
        display:'flex',
        alignItems:'space-between',
        
       

    },
    color1:{
        color:'#d50000',
       
    },
    
    border:{
        border:'solid',
    },
    media:{
        height:250,

    },
    activeCard:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'10px solid #22289a',
        borderTop:'10px solid rgba(160, 32, 240,1)',
        transform:'scale(1.03)',
        boxShadow:'8px 8px 12px rgba(160, 32, 240,0.4)',
    },
    grid:{
        height:'100%',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'10px solid white',
        // borderTop:'10px solid rgba(0,0,0,0)',
    },
    fullHeightCard:{
        height:'100%',
    },
    title:{
        padding:'0 16px',
       
    },
    cardActions:{
        padding:'0 16px 8px 16px',
        display:'flex',
        justifyContent:'space-between',
    },
    cardTitle:{
        fontFamily: 'Poppins',
        fontSize:'20px'
    },
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:20,
        fontFamily: 'Poppins',
    },
    info:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'50vh',
        padding:'10%',
        borderRadius:10,
        color:'white',
        fontFamily: 'Poppins',
        
        
        //boxShadow:'20px 20px 50px rgba(0,0,0,0.2)',
    },
    infoItem:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
        fontSize:'16px',
        fontFamily: 'Poppins',
        // boxShadow:'4px 4px 12px rgba(0,0,0,0.2)',
    },
    logoContainer:{
        height:250,
        width:'100%',
        display:'flex',
        justifyContent:'flex-end',
        
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column-reverse',
            textAlign:'center',
           justifyContent:'center',
        }
    },
    logo:{
        borderRadius:'10px',
        height:'200px',
        width:'200px',
        marginRight:'8%',
        [theme.breakpoints.down('sm')]:{
            height:'250px',
            
        }
    },
    infoContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
        }
    },
    card1:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        padding:'3%',
        borderRadius:'10px',
        color:'white',
        backgroundColor:'rgba(21,101,192)',
        margin:'0 12px',
        textAlign:'center',
        height:'25vmin',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column-reverse',
            textAlign:'center',
            width:'100%',
            height:'initial','&:nth-of-type(1)':{
                marginBottom:'12px'
            },
        },
    },
    image:{
        marginLeft:20,
    },
    link:{
        textDecoration:'none',
        color:'rgba(21,101,192)',
    },
    root:{
        width: 500,
        height: 500,
        backgroundColor:'red',

    },
    
    footer:{
        textAlign:'center',
        // position:'fixed',
        // left:0,
        // bottom:0,
        color:'greyblue',
        width:'100%',
        display:'flex',
        fontSize:'22px',
        fontWeight:'800',
        alignItems:'center',
        justifyContent:'center',
        height:'30px',
        fontFamily: 'Poppins',
        [theme.breakpoints.down('sm')]:{
            display:'none',
        },
    },
}));

export default styles;