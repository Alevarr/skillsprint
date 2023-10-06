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
import { useNavigate } from "react-router-dom";

interface Props {
  token: string | null;
}

export default function ({ token }: Props) {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <HStack
        as="header"
        px={["20px", "40px"]}
        py={2}
        bg="blue.900"
        justify="space-between"
      >
        <HStack as="nav">
          <Image
            src={logo}
            boxSize="60px"
            objectFit="cover"
            cursor="pointer"
            onClick={() => navigate("/")}
          />
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
            <Button
              variant="ghost"
              color="white"
              colorScheme="buttonOrange"
              onClick={() => navigate("/cases")}
            >
              Заказы
            </Button>
            <Button
              variant="ghost"
              color="white"
              colorScheme="buttonOrange"
              isDisabled
            >
              Фрилансеры
            </Button>
          </Show>
        </HStack>
        <HStack>
          {!token ? (
            <>
              <Button
                variant="link"
                p={2}
                color="white"
                _focus={{ color: "white" }}
                colorScheme="buttonOrange"
                onClick={() => navigate("/login")}
              >
                Вход
              </Button>
              <Button
                colorScheme="buttonOrange"
                onClick={() => navigate("/signup")}
              >
                Регистрация
              </Button>{" "}
            </>
          ) : (
            <Button colorScheme="buttonOrange" onClick={() => navigate("/me")}>
              Личный кабинет
            </Button>
          )}
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <ButtonGroup
          as="nav"
          p={2}
          color="white"
          bg="blue.900"
          shadow="md"
          w="100%"
          spacing={2}
        >
          <Button
            variant="ghost"
            color="white"
            colorScheme="buttonOrange"
            onClick={() => navigate("/cases")}
          >
            Заказы
          </Button>
          <Button
            variant="ghost"
            color="white"
            isDisabled
            colorScheme="buttonOrange"
          >
            Фрилансеры
          </Button>
        </ButtonGroup>
      </Collapse>
    </>
  );
}
