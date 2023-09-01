import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // as를 이용해서 HashRouter의 이름을 Router로 바꾸기

const AppRouter = () => { // Router를 미리 정의했기 때문에 중복되면 안 되므로 AppRouter로 정의.
  //Switch : 여러 가지 Route 중 하나만 랜더링 할 수 있게 해줌.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Switch>
        <Route />
      </Switch> 
    </Router>
  );
};

export default AppRouter;

