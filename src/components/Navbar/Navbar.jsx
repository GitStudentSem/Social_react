import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";
import RecentDialogs from "./recentDialogs/RecentDialogs";
const Navbar = (props) => {
  let recentDialogsElements = props.state.dialogs.map((d) => (
    <RecentDialogs name={d.name} id={d.id} />
  ));
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        {/* вместо "а" стоят "NavLink" для изменения контента без перезагрузки страницы
        вместо "href" используется "to" */}

        {/* "NavLink" автоматически дабавляет класс 'active'
        activeClassName={s.active} прописывает его статически как он прописан в стилях  */}
        <NavLink className={s.link} to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/dialogs" activeClassName={s.active}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={s.link} to="/settings" activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <h3 className={s.title}>Recent Dialogues</h3>
      {recentDialogsElements}
    </nav>
  );
};
export default Navbar;
