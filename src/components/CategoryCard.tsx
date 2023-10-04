import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";

export default () => {
  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
    >
      <CardHeader>
        <Heading as="h2" size="md" fontFamily="Ubuntu">
          Название категории
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>Сайты "под ключ", Бэкенд, Фронтенд и другое</Text>
        <Badge colorScheme="blue" p={1} mt={2} borderRadius={4}>
          107
        </Badge>
      </CardBody>
    </Card>
  );
};
