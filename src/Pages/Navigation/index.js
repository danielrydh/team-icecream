import React from 'react';
import { StyledLink, UIRow } from '../../GeneralStyles';
//import { Link } from 'react-router-dom';
import { Text } from '../../components/UI/TextComponent';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import  { AuthUserContext }  from '../../Pages/Session';
import * as ROLES from '../../constants/roles';



const Navigation = ({ authUser }) => (
  
    <AuthUserContext.Consumer>
      {authUser => 
        authUser ? (
        <NavigationAuth authUser={authUser}/>
        ) : (
        <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>  
  
);

const NavigationAuth = ({ authUser }) => (
  <ul style={{marginTop: '0', paddingTop:'10px', paddingLeft:'0'}}>
    
    {authUser.roles.includes(ROLES.Admin) && ( 
      <li>
        <UIRow  flex endCenter >
          <StyledLink to={ROUTES.Admin} >
              <Text style={{marginBottom:"0"}} gold>Admin</Text>
          </StyledLink> 
        </UIRow>
      </li>
    )}
    <li>
        <SignOutButton />
    </li> 
  </ul>
  
);

const NavigationNonAuth = () => ( null
  
);
//   <ul style={{marginTop: '0', paddingTop:'10px', paddingLeft:'0'}}>
//       <li>
//         <UIRow  flex endCenter >
//           <StyledLink to={ROUTES.HOME}>
//             <Text gold>home</Text>
//           </StyledLink>
//         </UIRow>
//       </li>
//   </ul>
  
// )


export default Navigation;