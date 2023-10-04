import {
  Button,
  HStack,
  Heading,
  Image,
  Show,
  Text,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function () {
  return (
    <>
      <HStack spacing={8}>
        <Show above="sm">
          <Image src={logo} boxSize="128px" objectFit="cover" />
        </Show>
        <VStack alignItems={["center", "flex-start"]}>
          <Heading as="h1" size="2xl" color="orange.900">
            SKILLSPRINT
          </Heading>
          <Text>
            Уникальная биржа фриланса, созданная специально для разработчиков и
            дизайнеров!
          </Text>
          <Button colorScheme="buttonOrange">Разместить Заказ</Button>
        </VStack>
      </HStack>
    </>
  );
}
