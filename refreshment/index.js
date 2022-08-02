import Header from "./Header";

const Main = () => {
  return (
    <main>
      <h1>Facts about React</h1>
      <ol>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ol>
    </main>
  );
};

const Footer = () => {
  return (
    <footer>
      <small>©2022 JagMax development. All rights reserved.</small>
    </footer>
  );
};

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
