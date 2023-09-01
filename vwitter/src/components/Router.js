import { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom"; // as를 이용해서 HashRouter의 이름을 Router로 바꾸기
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = () => { // Router를 미리 정의했기 때문에 중복되면 안 되므로 AppRouter로 정의.
  // setIsLoggedIn : isLoggedIn을 변경할 때 사용하는 함수.
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // Switch : 여러 가지 Route 중 하나만 랜더링 할 수 있게 해줌.
  return (
    <Router>
      <Switch>
        {isLoggedIn ? ( // 삼항연산자로 isLoggedIn의 값에 따라 다른 Route를 보여줌.
          <Route exact path="/">
            <Home />
          </Route>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
          )}
      </Switch> 
    </Router>
  );
};

export default AppRouter;

