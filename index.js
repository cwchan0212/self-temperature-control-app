function App() {
  
  const [temperature, setTemperature] = React.useState(20);
  const [display, setDisplay] = React.useState("neutral");  
  
  const Header = () => {
    const title = "#3: Temperature Control App";
    return <div class="header h1">{title}</div>;
  };
  
  const Ref = () => {
    const url = "https://youtu.be/V3bhcxpoxQU";
    return <div class="ref"><a href={url} target="_blank">(Ref: {url})</a></div>;
    
  };

  const adjustment = (count) => {
    if ((temperature + count) <= 10) {
      setDisplay("cold");
    } else if ((temperature + count) >= 30) {
      setDisplay("hot");
    } else {
      setDisplay("neutral");
    }
    return setTemperature(temperature + count);
  }
  
  
  return (
    <div>
      <Header />
      <Ref />
      <div class="app-container">
        <div class="temperature-display-container">
          <div class={`temperature-display ${display}`}>{temperature}°C</div>
        </div>
        <div class="button-container">
          <button onClick={() => adjustment(-1)}>-</button>
          <button onClick={() => adjustment(1)}>+</button>
        </div>
      </div>
    </div>
  );
}

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
