import {
  Tabs,
  TabList,
  Tab,
  Show,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import NoRepliesYet from "./NoRepliesYet";

export default () => {
  return (
    <Tabs colorScheme="orange" isFitted>
      <TabList>
        <Tab>Все отлики</Tab>
        <Tab>В работе</Tab>
        <Tab>Завершенные</Tab>
        <Show above="sm">
          <Tab isDisabled>Архив</Tab>
        </Show>
      </TabList>
      <TabPanels>
        <TabPanel>
          <NoRepliesYet>Пока нет отликов</NoRepliesYet>
        </TabPanel>
        <TabPanel>
          <NoRepliesYet>Пока нет заказов в работе</NoRepliesYet>
        </TabPanel>
        <TabPanel>
          <NoRepliesYet>Пока нет выполненных заказов</NoRepliesYet>
        </TabPanel>
        <Show above="sm">
          <TabPanel>
            <NoRepliesYet>Нет архивных заказов</NoRepliesYet>
          </TabPanel>
        </Show>
      </TabPanels>
    </Tabs>
  );
};
