import { Flex, Divider, Heading, Text } from "@chakra-ui/react";
import PlaceOrderButton from "./PlaceOrderButton";

export default () => {
  return (
    <Flex direction="column" gap={2} p={8}>
      <PlaceOrderButton />
      <Divider mt={2} />
      <Heading
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        mb={2}
        fontFamily="Ubuntu"
      >
        Я Заказчик
      </Heading>
      <Text as="span" color="gray" cursor="pointer">
        Избранные исполнители
      </Text>
      <Text as="span" color="gray" cursor="pointer">
        Рекомендуемые исполнители
      </Text>
      <Text as="span" color="gray" cursor="pointer">
        Безопасные платежи
      </Text>
    </Flex>
  );
};
