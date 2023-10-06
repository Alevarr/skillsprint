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
import CasesFilters from "../components/CasesFIlters";
import CasesList from "../components/CasesList";

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
        <CasesFilters />
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
          <CasesList />
          {/* <CaseCard /> */}
        </VStack>
      </GridItem>
    </Grid>
  );
};
