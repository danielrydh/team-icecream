import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { Text } from '../../components/UI/TextComponent';
import { UIRow, StyledLink } from '../../GeneralStyles';
import { withFirebase } from '../Firebase';
import { withAuthorization } from '../../Pages/Session';
import * as ROLES from '../../constants/roles';
import * as ROUTES from '../../constants/routes';

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <Fragment>

        {loading && <div>Loading ...</div>}
        <UIRow height="calc(100% - 160px)" backgroundLight >
          <UserList users={users} />
        </UIRow>
        <UIRow height="70px" flex endCenter backgroundLight>
          <StyledLink to={ROUTES.MAP}>
            <Text style={{ marginBottom: "26px" }} gold>Back</Text>
          </StyledLink>
        </UIRow>

      </Fragment>
    );
  }
}
const longitude = (user) => {
  return (user.position && user.position.latitude) ? user.position.latitude : null
}

function latitude(user) {
  return (
    (user.position && user.position.longitude) ? user.position.longitude : null
  );
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid} style={{ marginBottom: '15px' }}>
        <span >
          <strong>ID:</strong> {user.uid}
          <ul>
            <li>
              <strong>Username:</strong> {user.username}
            </li>
            <li>
              <strong>E-Mail:</strong> {user.email}
            </li>
            <li>
              <ul style={{ paddingLeft: '0px' }}> <strong>Position:</strong>
                <li style={{ paddingLeft: '40px' }}>Latitude: {latitude(user)}</li>
                <li style={{ paddingLeft: '40px' }}>Longitude: {longitude(user)}</li>
              </ul>
            </li>
          </ul>
        </span>
      </li>
    ))}
  </ul>
);




const condition = authUser =>
  authUser && authUser.roles.includes(ROLES.Admin);

export default compose(
  withAuthorization(condition),
  withFirebase,
)(Admin);


