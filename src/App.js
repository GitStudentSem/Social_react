import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
// Импорт компонент из react-router-dom не забыть сделать
// необходимо установить пакет react-router-dom
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    // BrowserRouter необходимая обертка для работы Router,
    //необходимо установить пакет react-router-dom и импортировать его
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          {/* Роут для переключения между ссылками необходимо установить пакет react-router-dom
            и импортировать его */}
          {/* Route принимает 2 метода:  render и component через render можно передать props*/}
          <Route
            path="/dialogs"
            render={() => <Dialogs store={props.store} />}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
