import { render } from "react-dom";
import { RecoilRoot } from "recoil";
// import { HomeScreen } from "./example/home-screen";
import { TodoList } from "./todo-app/todo-list";

const App = (
  <RecoilRoot>
    {/* <div>App</div>
    <HomeScreen /> */}
    <TodoList />
  </RecoilRoot>
);

render(App, document.querySelector("#app-container"));
