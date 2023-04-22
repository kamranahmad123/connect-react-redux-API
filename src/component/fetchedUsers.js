import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

import React from 'react'

export function FetchedUsers() {
    const {users, isLoading, error} = useSelector((store) => store.users)
    // const dispatch = useDispatch();
 
      if(isLoading === true) {
        return (
        <div className="loading">
        Loading
        </div>)
      }
      // if (error) {
      //  return (
      //   <div className="error">Error has occured</div>
      //  )
      // }
      return (
        <div className="userData">
          {users.map((user) => (
            <ul>
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
            </ul>
          ))}
        </div>
      )
    
}

export default FetchedUsers
