import { Stack, FormControl, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <Stack as="form" spacing={4}>
      <FormControl isRequired>
        <Input
          placeholder="Email для входа"
          focusBorderColor="orange.900"
          borderColor="blue.400"
          type="email"
        />
      </FormControl>
      <FormControl isRequired>
        <Input
          placeholder="Пароль"
          type="password"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        />
      </FormControl>

      <Button
        colorScheme="buttonOrange"
        type="submit"
        mt={4}
        onClick={() => navigate("/me")}
      >
        Войти
      </Button>
      <Button
        colorScheme="orange"
        variant="outline"
        onClick={() => navigate("/signup")}
      >
        Зарегистрироваться
      </Button>
    </Stack>
  );
}
