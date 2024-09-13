import { Calculator  } from './components/Calculator';
import { Title } from "./components/Title";
import { Text } from "./components/Text";

function App() {
  return (
    <div className="App">
      <Title text="Lommeregner til Studerende" />
      <Text text="Denne lommeregner er designet til at hjælpe studerende med at udføre grundlæggende aritmetiske operationer på en brugervenlig og interaktiv måde. God fornøjelse!" />
      <Calculator />
    </div>
  );
}

export default App;
