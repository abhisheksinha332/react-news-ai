import React from 'react';
import NewsItem from './NewsItem';
import { Grid, Typography, Grow} from '@material-ui/core';
//import classes from '*.module.css';
import styles from './style.js';



const info = [
    {color:'red', title:'Latest News', text:'Give me the latest news'},
    {color:'blue', title:'News by Categories', info:'Business, Entertainment,', text:'Give me the Entertainment news'},
    {color:'green', title:'News by Terms', info:'Bitcoin, Smartphone, Technology',text:'Give me the Smartphone news'},
    {color:'purple', title:'News by Source', info:'CNN, Wired, BBC News, Times new',text:'Give me the BBC news'},
];

const NewsCard = ({articles}) => {
    const classes = styles();
    if(!articles.length){
        return(
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                { 
                    info.map((infoItem)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} className={classes.info}>
                            <div className={classes.info} style={{backgroundColor:infoItem.color}}>
                                <Typography variant="h5">{infoItem.title}</Typography>
                                {infoItem.info ? 
                                <Typography variant="h6" className={classes.infoItem}><strong>{infoItem.title.split(" ")[2]}:<br />
                                </strong>  {infoItem.info}</Typography> 
                                :
                                    null
                            }
                            <Typography variant="h6" className={classes.infoItem}>Try saying: <i>{infoItem.text}</i></Typography>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
            </Grow>
        )
    }
    return (

        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {
               articles.map((article,index)=>(
                   <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                   <NewsItem article={article} index={index}/>
                   </Grid>
               ))
           }
            </Grid>
          
        </Grow>
    )
}

export default NewsCard;
