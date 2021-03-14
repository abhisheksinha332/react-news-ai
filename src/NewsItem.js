import React,{useState, useEffect, createRef} from 'react';
import {Card, Typography,CardActionArea,CardActions, CardContent, CardMedia,Button} from '@material-ui/core';

import styles from './style.js';
const NewsItem = ({article:{ description, publishedAt,source, title, url, urlToImage }, index, activeArticle}) => {
    const classes = styles();
    // const [reference, setReference] = useState([]);
    // const scrollToRef = (ref) => window.scroll(0,ref.current.offsetTop - 50);
    // useEffect(()=>{
    //     setReference((refs)=>Array(20).fill().map((_,j)=> refs[j] || createRef()));
    // },[]);
    // useEffect(()=>{
    //     if(index === activeArticle && reference[activeArticle] ){
    //         scrollToRef(reference(activeArticle));
    //     }
    // },[index,activeArticle,reference])

    const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);
    return (
        
    
      <Card className={ activeArticle === index ? classes.activeCard : classes.card}  ref={elRefs[index]}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage} />
                {/* <img src={urlToImage} /> */}
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5" className={classes.title}>{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" >{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{index+1} </Typography>
            </CardActions>
        </Card>
    )
}

export default NewsItem;
