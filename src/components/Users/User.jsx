import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/images/user.svg";
import { NavLink } from "react-router-dom";

let User = ({ user, followingInProgress, follow, unfollow }) => {
  return (
    <div className={s.user}>
      <div className={s.avatar_wrapper}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : avatar}
              alt="avatar"
            />
          </NavLink>
        </div>

        {user.followed ? (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={s.follow}
            onClick={() => {
              unfollow(user.id);
            }}
          >
            unfollow
          </button>
        ) : (
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            className={s.follow}
            onClick={() => {
              follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={s.name_wrapper}>
        <div>{user.name}</div>
        {/* <div>{user.status}</div> */}
        <div className={s.status}>asdwadadad</div>
      </div>
      <div className={s.location}>
        <div>{"user.location.country"}</div>
        <div>{"user.location.city"}</div>
      </div>
    </div>
  );
};
export default User;
