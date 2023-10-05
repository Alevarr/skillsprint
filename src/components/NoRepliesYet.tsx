import { Flex } from "@chakra-ui/react";
import { TbMessage2Cancel } from "react-icons/tb";
import { Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

export default ({ children: message }: Props) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      h="prose"
    >
      <TbMessage2Cancel size="100px" color="gray"></TbMessage2Cancel>
      <Text size="2xl" color="gray">
        {message}
      </Text>
    </Flex>
  );
};
