import { HamburgerIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  HStack,
  Show,
  IconButton,
  Button,
  Collapse,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";

export default function () {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack as="header" px="40px" py={2} bg="blue" justify="space-between">
        <HStack as="nav">
          <Image src={logo} boxSize="60px" objectFit="cover" cursor="pointer" />
          <Show below="sm">
            <IconButton
              colorScheme="buttonOrange"
              variant="ghost"
              color="white"
              aria-label="Open Menu"
              size="lg"
              icon={<HamburgerIcon boxSize={6} />}
              onClick={onToggle}
            />
          </Show>
          <Show above="sm">
            <Button variant="ghost" color="white" colorScheme="buttonOrange">
              Заказы
            </Button>
            <Button variant="ghost" color="white" colorScheme="buttonOrange">
              Фрилансеры
            </Button>
          </Show>
        </HStack>
        <HStack>
          <Button variant="link" p={2} color="white">
            Вход
          </Button>
          <Button colorScheme="buttonOrange">Регистрация</Button>
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <ButtonGroup
          as="nav"
          p={2}
          color="white"
          bg="blue"
          shadow="md"
          w="100%"
          spacing={2}
        >
          <Button variant="ghost" color="white" colorScheme="buttonOrange">
            Заказы
          </Button>
          <Button variant="ghost" color="white" colorScheme="buttonOrange">
            Фрилансеры
          </Button>
        </ButtonGroup>
      </Collapse>
    </>
  );
}
