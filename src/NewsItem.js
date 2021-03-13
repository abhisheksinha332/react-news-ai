import React from 'react';
import {Card, Typography,CardActionArea,CardActions, CardContent, CardMedia,Button} from '@material-ui/core';
import styles from './style.js';
const NewsItem = ({article:{ description, publishedAt,source, title, url, urlToImage }, index}) => {
    const classes = styles();
    return (
        
        <Card className={classes.card}>
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
                <Typography variant="h5" color="textSecondary">{index+1}</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsItem;
