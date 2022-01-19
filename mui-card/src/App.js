import "./App.css";
import { CustomCard } from "./components/CustomCard";

function App() {
  const cardData = {
    url: "https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg",
    name: "Sara Conor",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum.",
  };

  return (
    <div className="App">
      <CustomCard cardData={cardData} />
    </div>
  );
}

export default App;
