import React from "react";
import s from "./Users.module.css";
import avatar from "../../assets/images/user.svg";

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
