import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
//import NewsCard from './component/NewsCard/newsCard';
import NewsCard from './NewsCard';
import styles from './style.js';

const alankey='3563ca5741294b4c090226e11f7d30452e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsItems, setNewsItems] = useState([]);
    useEffect (()=> {
        alanBtn({
            key:alankey,
            onCommand: ({command, articles})=>{
                if(command === 'newsHeadline'){
                    setNewsItems(articles);
                    console.log(articles);
                }
            }
        })
    },[])
    const classes = styles();
    return (
       
        <div>
           <div className={classes.logoContainer}>
               <img src="https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/alan.jpg" alt="Logo" className={classes.logo}></img>
           </div>
            <NewsCard articles={newsItems} />
        </div>
    )
}

export default App
