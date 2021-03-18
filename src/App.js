import React,{useState,useEffect} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from 'words-to-numbers';
//import NewsCard from './component/NewsCard/newsCard';
import NewsCard from './NewsCard';
import styles from './style.js';
import logo from './logo.png';

const alankey='3563ca5741294b4c090226e11f7d30452e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    useEffect (()=> {
        alanBtn({
            key:alankey,
            onCommand: ({command, articles,number})=>{
                if(command === 'newsHeadline'){
                    setNewsItems(articles);
                    console.log(articles);
                    setActiveArticle(-1)
                }
                
                else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                }
                else if (command === 'open'){
                    console.log(number);
                    const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
                    const article = articles[parsedNumber - 1];
                    console.log(parsedNumber);
          
                    if (parsedNumber > articles.length) {
                      alanBtn().playText('Please try that again...');
                    } else if (article) {
                      window.open(article.url, '_blank');
                      alanBtn().playText('Opening...');
                    }
                   
                }
            }
        })
    },[])
    const classes = styles();
   
    return (
       
        <div>
           <div className={classes.logoContainer}>
               <img src={logo} alt="Logo" className={classes.logo}></img>
           </div>
            <NewsCard articles={newsItems} activeArticle={activeArticle} />
          
        </div>
    )
}
  
export default App
