import React from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

const News = (props) => {
  return <div>News</div>;
};
// withAuthRedirect защищает от входа без логина
export default compose(withAuthRedirect)(News);
// export default News;
