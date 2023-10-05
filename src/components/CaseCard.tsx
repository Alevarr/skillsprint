import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbMessageBolt } from "react-icons/tb";

export default () => {
  return (
    <Card
      _hover={{
        transform: "scale(1.01)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
      border="1px"
      borderColor="orange.900"
      width="100%"
      boxShadow="base"
    >
      <CardHeader>Название заказа</CardHeader>
      <CardBody>
        <Flex justify="space-between">
          <VStack align="flex-start">
            <HStack spacing={2}>
              <HStack spacing={1}>
                <AiOutlineClockCircle />
                <Text as="span">5 минут назад</Text>
              </HStack>
              <HStack spacing={1}>
                <TbMessageBolt />
                <Text as="span">7 откликов</Text>
              </HStack>
            </HStack>
            <Badge colorScheme="orange" borderRadius={6} p={2}>
              Дизайн
            </Badge>
          </VStack>
          <Center>2000 руб.</Center>
        </Flex>
      </CardBody>
    </Card>
  );
};
