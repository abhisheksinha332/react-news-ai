import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
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
   
});

export default styles;