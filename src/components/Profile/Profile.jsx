import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

// из index.js в props попадают: posts
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state.posts} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
