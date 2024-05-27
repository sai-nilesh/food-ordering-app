import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import Body from './Body';
import ResMenu from './ResMenu';
import Registor from './Registor';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Cart from './Cart';

const Main = () => {
    const dispatch = useDispatch();
 
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        } else {
          dispatch(removeUser());
         
        }
      });
    },[]);
    const router = createBrowserRouter(
        [
          {
            path: "/",
            element: <Body />,
          },
          {
            path: "resturants/:resId",
            element: <ResMenu />,
          },
          {
            path: "/registor",
            element: <Registor />,
          },
          {
            path: "/cart",
            element: <Cart/>,
          },
        ]
        // errorElement
      );
  return (
    <RouterProvider router={router}>
    <div></div>
    </RouterProvider>
  )
}

export default Main;