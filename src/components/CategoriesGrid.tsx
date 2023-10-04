import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";

export default () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding={4}>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
      <CategoryCard></CategoryCard>
    </SimpleGrid>
  );
};
