import { Flex, Divider, Heading, Text, Button } from "@chakra-ui/react";

export default () => {
  return (
    <Flex direction="column" gap={2} p={8}>
      <Button colorScheme="buttonOrange">Добавить портфолио</Button>
      <Divider mt={2} />
      <Heading
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        mt={2}
        mb={2}
        fontFamily="Ubuntu"
      >
        Я Фрилансер
      </Heading>
      <Text as="span" color="gray" cursor="pointer">
        Избранные заказчики
      </Text>
      <Text as="span" color="gray" cursor="pointer">
        Безопасные платежи
      </Text>
      <Button
        variant="link"
        width="min-content"
        fontWeight="normal"
        color="gray"
        cursor="pointer"
      >
        Вывод платежей
      </Button>
    </Flex>
  );
};
