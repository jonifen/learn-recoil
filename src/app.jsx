import { render } from "react-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { HomeScreen } from "./home-screen";

const App = (
  <RecoilRoot>
    <div>App</div>
    <HomeScreen />
  </RecoilRoot>
);

render(App, document.querySelector("#app-container"));
