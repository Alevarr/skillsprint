import { Flex } from "@chakra-ui/react";
import { BiSolidBox } from "react-icons/bi";
import { Text } from "@chakra-ui/react";

export default () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      h="prose"
    >
      <BiSolidBox size="100px" color="gray"></BiSolidBox>
      <Text size="2xl" color="gray">
        Нет заказов
      </Text>
    </Flex>
  );
};
