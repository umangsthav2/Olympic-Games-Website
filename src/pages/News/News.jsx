import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const News = () =>
    {
        const jauu_jauu = useNavigate();
        useEffect(
            ()=>
                {
                    var redirectionLink = `/news/all/page/`; 
                    jauu_jauu(redirectionLink);
                }, []
        );
        
         
    }
export default News;