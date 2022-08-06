import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import BottomHeader from "./components/Header/BottomHeader";
import Header from "./components/Header/Header";
import StickyHeader from "./components/Header/StickyHeader";
import Section from "./components/Section";
import Subscribe from "./components/Subscribe/Subscribe";
import categories from "./data/categories.json";
function App() {
  return (
    <div className="App">
      <Header />
      <StickyHeader />
      <main>
        <Banner />
        <Subscribe />
        {categories &&
          categories.map((category) => (
            <Section heading={category.heading} data={category.items} />
          ))}
      </main>
      <Footer />
      <BottomHeader />
    </div>
  );
}

export default App;
