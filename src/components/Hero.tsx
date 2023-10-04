import { HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function () {
  return (
    <>
      <HStack spacing={8}>
        <Image src={logo} boxSize="128px" objectFit="cover" />
        <Stack>
          <Heading as="h1" size="2xl" color="orange.900">
            SKILLSPRINT
          </Heading>
          <Text>
            Уникальная биржа фриланса, созданная специально для разработчиков и
            дизайнеров!
          </Text>
        </Stack>
      </HStack>
    </>
  );
}
