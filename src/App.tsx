import { VStack } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Fonts from "./Fonts";
import CategoriesGrid from "./components/CategoriesGrid";

function App() {
  return (
    <>
      <Fonts />
      <Header />
      <VStack p="40px" bg="orange.100" spacing="40px">
        <Hero />
        <CategoriesGrid />
      </VStack>
    </>
  );
}

export default App;
