import {
  Button,
  ButtonGroup,
  Collapse,
  HStack,
  IconButton,
  Image,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <HStack px="40px" py={2} bg="blue" justify="space-between">
        <HStack>
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

export default App;
