import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/images/user.svg";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.users}>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && s.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div className={s.user} key={u.id}>
          <div className={s.avatar_wrapper}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : avatar}
                  alt="avatar"
                />
              </NavLink>
            </div>

            {u.followed ? (
              <button
                className={s.follow}
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "4005e396-5edb-48e9-82c7-a6111fe54f90",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
                    });
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                className={s.follow}
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "4005e396-5edb-48e9-82c7-a6111fe54f90",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
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
