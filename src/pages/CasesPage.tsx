import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  VStack,
} from "@chakra-ui/react";
import CaseCard from "../components/CaseCard";
import categories from "../categories";

export default () => {
  return (
    <Grid
      templateAreas={{
        base: `"aside"
        "main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
      gap={4}
      p={4}
    >
      <GridItem
        area="aside"
        paddingX="16px"
        boxShadow="md"
        borderRadius={6}
        // border="1px"
        borderColor="orange.900"
        p={4}
      >
        <Stack as="form" spacing={4}>
          <FormControl>
            <FormLabel fontSize="md" fontFamily="Ubuntu" mb={3}>
              Категория
            </FormLabel>
            <Select
              placeholder="Выбирете категорию..."
              focusBorderColor="orange.900"
              borderColor="blue.400"
            >
              {categories.map((category) => (
                <option value={category.slug}>{category.name}</option>
              ))}
            </Select>
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
                <NumberInputStepper></NumberInputStepper>
              </NumberInput>
              <NumberInput
                min={500}
                step={100}
                focusBorderColor="orange.900"
                borderColor="blue.400"
              >
                <NumberInputField placeholder="До" />
                <NumberInputStepper></NumberInputStepper>
              </NumberInput>
            </HStack>
          </FormControl>
          <Button colorScheme="buttonOrange" type="submit">
            Применить фильтры
          </Button>
        </Stack>
      </GridItem>
      <GridItem
        area="main"
        boxShadow="md"
        borderRadius={6}
        // border="1px"
        borderColor="orange.900"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "10px",
            borderRadius: "6px",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
        }}
        p={4}
        maxH={{ lg: "calc(100vh - 108px)" }}
      >
        <VStack>
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
          <CaseCard />
        </VStack>
      </GridItem>
    </Grid>
  );
};
