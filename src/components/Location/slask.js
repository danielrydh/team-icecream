import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext, withAuthorization } from "../../Pages/Session";
import { withFirebase } from "../../Pages/Firebase";
import "firebase/auth";


const ProfilePage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Profile </h1>
        <p>
          <b>Username: </b>
          {authUser.username}
        </p>
        <p>
          <b>Email: </b>
          {authUser.email}
        </p>
        <br />
        <span>
          <strong>test:</strong> {authUser.uid}
        </span>
        <Profiles userId={authUser.uid} />
        <p>
          <button>
            <Link to={ROUTES.CREATE_PROFILE}>Create profile</Link>
          </button>
          <br />
          <Link to={ROUTES.ACCOUNT}>Change Password?</Link>
        </p>
      </div>
    )}
  </AuthUserContext.Consumer>
);

class ProfileContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      profiles: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.props.firebase
      .profiles()
      .on("value", snapshot => {
        const profilesObject = snapshot.val();
        const profilesList = Object.keys(profilesObject).map(key => ({
          ...profilesObject[key],
          uid: key
        }));
        this.setState({
          profiles: profilesList,
          loading: false
        });
      });
  }
  componentWillUnmount() {
    this.props.firebase
      .profiles().off();
  }
  render() {
    const { profiles, loading } = this.state;
    const { userId } = this.props;
    return (
      <div>
        <h2>Profile Info</h2>
        {loading && <div>Loading ...</div>}
        <ul>
          {profiles
            .filter(profile => profile.userId === userId)
            .map(profile => (
              <li key={profile.uid}>
                <span>
                  <strong>Name: </strong> {profile.fname} {profile.lname}
                </span>
                <br />
                <span>
                  <strong>Gender: </strong> {profile.gender}
                </span>
                <br />
                <span>
                  <strong>Age:</strong> {profile.age}
                </span>
                <br />
                <span>
                  <strong>Phone: </strong>+46 {profile.phone}
                </span>
                <br />
                <span>
                  <strong>City:</strong> {profile.city}
                </span>
                <br />
                <span>
                  <strong>Description:</strong> {profile.description}
                </span>
                <br />
                <span>
                  <strong>Profile.uid:</strong> {profile.uid}
                </span>
                <br />
                <span>
                  <strong>userId:</strong> {profile.userId}
                </span>
                <br />
                <br />
                <br />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
const Profiles = withFirebase(ProfileContent);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(ProfilePage);
