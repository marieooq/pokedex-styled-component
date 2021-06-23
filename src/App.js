//components
import Layout from "./components/Layout";
import CardContainer from "./components/CardContainer";

//JSON data
import pokedexJSON from "./pokedex";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <CardContainer lists={pokedexJSON} />
      </Layout>
    </div>
  );
}

export default App;
