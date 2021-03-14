import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles((theme)=>({
    container:{
        padding:'0 5%',
        width:'100%',
        margin:0,
       

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
    },
    grid:{
        height:'100%',
    },
    card:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        borderBottom:'10px solid white',
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
    details:{
        display:'flex',
        justifyContent:'space-between',
        margin:20,
    },
    info:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'45vh',
        padding:'10%',
        borderRadius:10,
        color:'white'
    },
    infoItem:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
    },
    logoContainer:{
        height:300,
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column-reverse',
            textAlign:'center',
        }
    },
    logo:{
        borderRadius:'10px',
        height:'200px',
        width:'350px',
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
    footer:{
        textAlign:'center',
        position:'fixed',
        left:0,
        bottom:0,
        color:'black',
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        height:'120px',
        [theme.breakpoints.down('sm')]:{
            display:'none',
        },
    },
}));

export default styles;