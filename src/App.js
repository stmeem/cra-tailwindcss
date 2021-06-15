import logo from "./logo.svg";
import tailwindcsslogo from "./tailwind-css-logo.svg";

function App() {
  return (
    <div className="mx-5 text-center mt-20 mb-8">
      <header className="h-24 flex justify-center lg:h-48">
        <img src={logo} className="" alt="logo" />
        <img src={tailwindcsslogo} className="" alt="logo" />
      </header>

      <p className="p-6 mb-6 ">
        <h1 className="text-4xl">Tailwind CSS + Create React App </h1>
      </p>
      <a
        className="text-blue-500"
        href="https://tailwindcss.com/docs/guides/create-react-app"
        target="_blank"
      >
        Find More about installation of Tailwind CSS with Create React App
      </a>
    </div>
  );
}

export default App;
