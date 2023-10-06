import {
  Stack,
  FormControl,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import categories from "../categories";
import useCaseQueryStore from "../store";

export default () => {
  const selectedCategory = useCaseQueryStore(
    (state) => state.caseQuery.category
  );
  const setCategory = useCaseQueryStore((state) => state.setCategory);
  return (
    <Stack as="form" spacing={4}>
      <FormControl>
        <FormLabel fontSize="md" fontFamily="Ubuntu" mb={3}>
          Категория
        </FormLabel>
        <List>
          {categories.map((category) => (
            <ListItem key={category.slug} py={2}>
              <Button
                whiteSpace="normal"
                colorScheme="buttonOrange"
                _hover={
                  selectedCategory?.slug === category.slug
                    ? { bg: "orange.900" }
                    : {
                        bg: "orange.100",
                      }
                }
                textAlign="left"
                fontSize="md"
                variant={
                  selectedCategory?.slug === category.slug ? "solid" : "outline"
                }
                onClick={() => setCategory(category)}
              >
                {category.name}
              </Button>
            </ListItem>
          ))}
        </List>
      </FormControl>
      <FormControl>
        <FormLabel fontSize="md" fontFamily="Ubuntu" mb={3}>
          Бюджет
        </FormLabel>
        <HStack>
          <NumberInput
            min={0}
            focusBorderColor="orange.900"
            borderColor="blue.400"
          >
            <NumberInputField placeholder="От" />
          </NumberInput>
          <NumberInput
            min={500}
            step={100}
            focusBorderColor="orange.900"
            borderColor="blue.400"
          >
            <NumberInputField placeholder="До" />
          </NumberInput>
        </HStack>
      </FormControl>
      {/* <Button colorScheme="buttonOrange" type="submit">
        Применить фильтры
      </Button> */}
    </Stack>
  );
};
