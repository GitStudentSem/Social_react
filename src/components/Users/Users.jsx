import React from "react";
import * as axios from "axios";
import avatar from "./user.svg";
import s from "./Users.module.css";

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };

  return (
    <div className={s.users}>
      <button onClick={getUsers}>Get users</button>
      {props.users.map((u) => (
        <div className={s.user} key={u.id}>
          <div className={s.avatar_wrapper}>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : avatar}
                alt="avatar"
              />
            </div>

            {u.followed ? (
              <button
                className={s.follow}
                onClick={() => {
                  props.unfollow(u.id);
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                className={s.follow}
                onClick={() => {
                  props.follow(u.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
          <div className={s.name_wrapper}>
            <div>{u.name}</div>
            {/* <div>{u.status}</div> */}
            <div className={s.status}>asdwadadad</div>
          </div>
          <div className={s.location}>
            <div>{"u.location.country"}</div>
            <div>{"u.location.city"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
