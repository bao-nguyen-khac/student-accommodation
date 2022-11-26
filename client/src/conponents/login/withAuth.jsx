import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context';

export const WithAuth = ({children}) => {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        const checkUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:4000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                  });
                  console.log(res);
                if (!res.data.successful) {
                    navigate('/signin',{replace: true});
                } else {
                    dispatch({type: 'SET_USER', payload: {isLoginIn: true}});
                }
                
            } catch (error) {
                navigate('/signin',{replace: true});
            }

        }
        checkUser();
    }, [dispatch, navigate])
  return <>{children}</>
}

export default WithAuth