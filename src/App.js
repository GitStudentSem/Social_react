import React, { Component } from "react";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// Импорт компонент из react-router-dom не забыть сделать
// необходимо установить пакет react-router-dom
import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { connect } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
// import { withRouter } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      // BrowserRouter необходимая обертка для работы Router,
      //необходимо установить пакет react-router-dom и импортировать его
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavbarContainer />
          <div className="app-wrapper-content">
            {/* Роут для переключения между ссылками необходимо установить пакет react-router-dom
            и импортировать его */}
            {/* Route принимает 2 метода:  render и component через render можно передать props*/}
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginPage />} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
// withRouter; не подключился
// export default compose(withRouter, connect(null, { getAuthUserData }))(App);
// Вот так должно быть
const mapStateToProps = (state) => ({ initialized: state.app.initialized });
export default compose(connect(mapStateToProps, { initializeApp }))(App);
