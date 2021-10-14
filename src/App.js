import React, { Component } from "react";
import "./App.css";
import store from "./redux/redux-store";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// Импорт компонент из react-router-dom не забыть сделать
// необходимо установить пакет react-router-dom
import { BrowserRouter, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/preloader/preloader";
import { withSuspense } from "./HOC/withSuspense";
const LoginPage = React.lazy(() => import("./components/Login/Login"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

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
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          {/* Роут для переключения между ссылками необходимо установить пакет react-router-dom
            и импортировать его */}
          {/* Route принимает 2 метода:  render и component через render можно передать props*/}
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={withSuspense(LoginPage)} />
        </div>
      </div>
    );
  }
}
// withRouter; не подключился
// export default compose(withRouter, connect(null, { getAuthUserData }))(App);
// Вот так должно быть
const mapStateToProps = (state) => ({ initialized: state.app.initialized });
let AppContainer = compose(connect(mapStateToProps, { initializeApp }))(App);
const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
