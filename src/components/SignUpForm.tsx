import { Stack, FormControl, Input, Button, Select } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function () {
  const navigate = useNavigate();
  return (
    <Stack as="form" spacing={4}>
      <FormControl isRequired>
        <Input
          placeholder="Ваше имя"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        />
      </FormControl>
      <FormControl isRequired>
        <Input
          placeholder="Email для регистрации"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        />
      </FormControl>
      <FormControl isRequired>
        <Input
          placeholder="Надежный пароль"
          type="password"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        />
      </FormControl>
      <FormControl isRequired>
        <Input
          placeholder="Повторите пароль"
          type="password"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        />
      </FormControl>
      <FormControl isRequired>
        <Select
          placeholder="Кто вы?"
          focusBorderColor="orange.900"
          borderColor="blue.400"
        >
          <option value="customer">Я закачик</option>
          <option value="freelancer">Я Фрилансер</option>
        </Select>
      </FormControl>
      <Button colorScheme="buttonOrange" type="submit" mt={4}>
        Зарегистрироваться
      </Button>
      <Button
        colorScheme="orange"
        variant="outline"
        onClick={() => navigate("/login")}
      >
        Вход
      </Button>
    </Stack>
  );
}
