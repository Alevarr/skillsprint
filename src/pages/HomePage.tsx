import { VStack } from "@chakra-ui/react";
import CategoriesGrid from "../components/CategoriesGrid";
import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <VStack p="40px" bg="orange.50" spacing="40px">
        <Hero />
        <CategoriesGrid />
      </VStack>
    </>
  );
}

export default HomePage;
