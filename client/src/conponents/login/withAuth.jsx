import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const WithAuth = ({children}) => {
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
                  console.log(res.data);
                if (!res.data.successful) {
                    navigate('/signin',{replace: true});
                }
            } catch (error) {
                navigate('/signin',{replace: true});
            }

        }
        checkUser();
    }, [navigate])
  return <>{children}</>
}

export default WithAuth