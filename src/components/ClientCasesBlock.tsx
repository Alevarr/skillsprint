import {
  Tabs,
  TabList,
  Tab,
  Show,
  TabPanels,
  TabPanel,
  VStack,
} from "@chakra-ui/react";
import NoCaseYet from "./NoCaseYet";
import CaseCard from "./CaseCard";
import CasesList from "./CasesList";

export default () => {
  return (
    <Tabs colorScheme="orange" isFitted>
      <TabList>
        <Tab>В поиске</Tab>
        <Tab>В работе</Tab>
        <Tab>Завершенные</Tab>
        <Show above="sm">
          <Tab isDisabled>Архив</Tab>
        </Show>
      </TabList>
      <TabPanels>
        <TabPanel>
          <VStack>
            <CasesList></CasesList>
          </VStack>
        </TabPanel>
        <TabPanel>
          <NoCaseYet />
        </TabPanel>
        <TabPanel>
          <NoCaseYet />
        </TabPanel>
        <Show above="sm">
          <TabPanel>
            <NoCaseYet />
          </TabPanel>
        </Show>
      </TabPanels>
    </Tabs>
  );
};
