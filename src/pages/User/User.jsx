import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const User = () =>
    {
        const jauu_jauu = useNavigate();
        useEffect(
            ()=>
                {
                    jauu_jauu('/user/login');
                }, []
        );
        
         
    }
export default User;