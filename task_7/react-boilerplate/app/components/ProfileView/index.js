/**
*
* ProfileView
*
*/

import React from 'react';
// import styled from 'styled-components';


function ProfileView(props) {
   if (props.username) {
    return (
      <article>
        <h2>Welcome, {props.username}</h2>
      </article>
    );
   }
  else if(props.username && props.date && props.photo) {
     return (
       <article>
         <h2>Welcome, {props.username}</h2>
         <h3>Birth date: {props.date}</h3>
         <image>{props.photo}</image>
       </article>
     );
  }
  else {
     return (
       <article>
         <h2>You are not a user</h2>
       </article>
     );
   }
}

ProfileView.propTypes = {
};

export default ProfileView;
