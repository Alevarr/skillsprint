import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  HStack,
  Heading,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbMessageBolt } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import RatingBadge from "./RatingBadge";
import Case from "../entities/Case";

interface Props {
  caseObject: Case;
  isLoading: boolean;
}

export default ({ caseObject, isLoading }: Props) => {
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
      boxShadow="lg"
      padding={4}
    >
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : (
        <Stack direction={{ base: "column", sm: "row" }} justify="space-evenly">
          <VStack justifyContent="center">
            <CgProfile size="40px" />
            <Text as="span" textAlign="center">
              Имя заказчика
            </Text>
            <RatingBadge rating={4.5} />
          </VStack>
          <VStack align="flex-start" maxW={{ sm: "70%" }} minW="70%">
            <CardHeader py={0}>
              <Heading fontFamily="Ubuntu" fontSize="lg">
                {caseObject.title}
              </Heading>
            </CardHeader>
            <CardBody py={0}>
              <Flex justify="space-between" align="flex-end">
                <VStack align="flex-start">
                  <Text noOfLines={2}>{caseObject.description}</Text>
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
                    {caseObject.category.name}
                  </Badge>
                </VStack>
              </Flex>
            </CardBody>
          </VStack>
          <Center fontSize="lg">2000 руб.</Center>
        </Stack>
      )}
    </Card>
  );
};
