import { Grid, GridItem } from "@chakra-ui/react";
import ProfileBlock from "../components/ProfileBlock";
import ClientBlock from "../components/ClientBlock";
import ClientCasesBlock from "../components/ClientCasesBlock";
import FreelancerBlock from "../components/FreelancerBlock";

export default function () {
  return (
    <Grid
      templateAreas={{
        base: '"cases" "aside-upper" "aside-lower"',
        lg: '"aside-upper cases" "aside-lower cases"',
      }}
      templateColumns={{ base: "1fr", lg: "300px 1fr" }}
      templateRows={{ base: "1fr auto-fit auto-fit", lg: "1fr 1fr" }}
      gap={4}
      p={4}
    >
      <GridItem
        area="cases"
        boxShadow="md"
        borderRadius={6}
        border="1px"
        borderColor="orange.900"
        maxH={{ lg: "calc(100vh - 108px)" }}
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
      >
        <ClientCasesBlock />
      </GridItem>
      <GridItem
        area="aside-upper"
        boxShadow="md"
        borderRadius={6}
        border="1px"
        borderColor="orange.900"
      >
        <ClientBlock />
      </GridItem>
      <GridItem
        area="aside-lower"
        boxShadow="md"
        borderRadius={6}
        border="1px"
        borderColor="orange.900"
        bg="white"
      >
        <ProfileBlock />
      </GridItem>
    </Grid>
  );
}
