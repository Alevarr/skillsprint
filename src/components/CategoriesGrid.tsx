import { SimpleGrid } from "@chakra-ui/react";
import CategoryCard from "./CategoryCard";
import categories from "../categories";

export default () => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding={4}>
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </SimpleGrid>
  );
};
