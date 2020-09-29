import "./index.css";
import "./src/components/header"
import renderHeader from "./src/components/header";

console.log("hello world");

const root = document.getElementById("app");

const render = () => {
  root.innerHTML = `
  <header id="header">
    <ul>
      <li>홈</li>
      <li>메뉴</li>
      <li>프로필</li>
    </ul>
  </header>
  <h1>Hello World?</h1>
  `;
};

render();
renderHeader()
