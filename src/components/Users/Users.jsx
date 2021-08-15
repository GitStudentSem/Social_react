import React from "react";

let Users = (props) => {
  if (props.users.length === 0) {
    debugger;
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://sun1-25.userapi.com/s/v1/ig2/EhAI73F-ywR6SgTUV4EJmittGtDbKQ10AvRjwEl3f8FsO8JkkgIHjAq48g5nf0g_NqfIR_o6p5RGA7VemsulZ3zo.jpg?size=50x0&quality=96&crop=0,76,639,639&ava=1",
        followed: true,
        fullName: "Первое имя",
        status: "Статов статый",
        location: { city: "Архангельск", country: "Россия" },
      },
      {
        id: 2,
        photoUrl:
          "https://sun1-25.userapi.com/s/v1/ig2/EhAI73F-ywR6SgTUV4EJmittGtDbKQ10AvRjwEl3f8FsO8JkkgIHjAq48g5nf0g_NqfIR_o6p5RGA7VemsulZ3zo.jpg?size=50x0&quality=96&crop=0,76,639,639&ava=1",
        followed: true,
        fullName: "Второе имя",
        status: "Пишу статус как не знаю кто",
        location: { city: "Питер", country: "Россия" },
      },
      {
        id: 3,
        photoUrl:
          "https://sun1-25.userapi.com/s/v1/ig2/EhAI73F-ywR6SgTUV4EJmittGtDbKQ10AvRjwEl3f8FsO8JkkgIHjAq48g5nf0g_NqfIR_o6p5RGA7VemsulZ3zo.jpg?size=50x0&quality=96&crop=0,76,639,639&ava=1",
        followed: false,
        fullName: "Кто я",
        status: "Кто здесь?",
        location: { city: "Где я", country: "Куда" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
