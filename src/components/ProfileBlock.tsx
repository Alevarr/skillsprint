import { Flex, Heading, Divider, Text } from "@chakra-ui/react";

export default () => {
  return (
    <Flex direction="column" gap={2} p={8}>
      <Heading
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        mb={2}
        fontFamily="Ubuntu"
      >
        Профиль
      </Heading>
      <Divider />
      <Text as="span" color="gray" cursor="pointer">
        Личная информация
      </Text>
      <Divider />
      <Text as="span" color="gray" cursor="pointer">
        Контакты
      </Text>
      <Divider />
      <Text as="span" color="gray" cursor="pointer">
        Счет
      </Text>
    </Flex>
  );
};
