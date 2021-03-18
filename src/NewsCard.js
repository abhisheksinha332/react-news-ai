import React from 'react';
import NewsItem from './NewsItem';
import { Grid, Typography, Grow} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

//import classes from '*.module.css';

import styles from './style.js';


const info = [
    {color:'#ffa41b', title:'Latest News', text:'Give me the latest news'},
    {color:'#ff5151', title:'News by Terms', info:'Bitcoin, Apple, TechCrunch, Smartphones',text:'Tell me about Bitcoins'},
    {color:'#007580', title:'News by Categories', info:'Business, Entertainment, General, Health, Science, Sports, Technology', text:'Give me the latest Entertainment news'},
    {color:'#9818d6', title:'News by Source', info:'CNN, Wired, BBC News, Ars Technica, BBC Sport, ESPN, Google News,Buzzfeed...',text:'Give me the news from BBC'},
];



const NewsCard = ({articles, activeArticle}) => {
    const classes = styles();
    if(!articles.length){
        return(
            <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            
                { 
                    info.map((infoItem)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}} className={classes.info}>
                            <div className={classes.info} style={{backgroundColor:infoItem.color}}>
                                <Typography className={classes.cardTitle} variant="h5">{infoItem.title}</Typography>
                                {infoItem.info ? 
                                <Typography variant="body1" className={classes.infoItem}><strong>{infoItem.title.split(" ")[2]}:<br />
                                </strong>  {infoItem.info}</Typography> 
                                :
                                    null
                            }
                            <Typography variant="h6" className={classes.infoItem}>Try saying: <i>{infoItem.text}</i></Typography>
                            </div>
                        </Grid>
                    ))
                }
                <div className={classes.footer}>
                    Made with &nbsp;
                  
                     <FavoriteIcon className={classes.color1} /> &nbsp; by &nbsp; <a href="https://abhishek-sinha.netlify.app/" target="_blank" rel="noreferrer" className={classes.link}> Abhishek Sinha</a> 
                </div>
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
                   <NewsItem article={article} activeArticle={activeArticle} index={index}  />
                   </Grid>
               ))
           }
            </Grid>
          
        </Grow>
    )
}

export default NewsCard;
