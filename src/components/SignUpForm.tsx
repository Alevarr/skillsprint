import {
  Stack,
  FormControl,
  Input,
  Button,
  Select,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import ApiClient from "../services/api-client";

export interface FieldProps {
  field: any;
  form: any;
}

export default function () {
  const navigate = useNavigate();
  const toast = useToast();
  const [token, setToken] =
    useOutletContext<[string | null, (token: string) => void]>();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        role: "",
      }}
      validate={(values) => {
        if (values.password !== values.repeatPassword)
          return { password: "Пароли не совпадают" };
      }}
      onSubmit={(values, actions) => {
        ApiClient.signUpUser({
          params: {
            email: values.email,
            name: values.name,
            password: values.password,
            role: values.role,
          },
        })
          .then((res) => {
            const tokenReceived = res.data["x-auth-token"];
            setToken(tokenReceived);
            navigate("/me");
            window.location.reload();
          })
          .catch((res) => {
            res = res.response;
            toast({
              title: "Ошибка",
              description: res?.data,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          });
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Stack spacing={4}>
            <Field name="name">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Ваше имя"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email" type="email">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Email для регистрации"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                    type="email"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: FieldProps) => {
                return (
                  <FormControl
                    isRequired
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <Input
                      {...field}
                      placeholder="Надежный пароль"
                      type="password"
                      focusBorderColor="orange.900"
                      borderColor="blue.400"
                    />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                );
              }}
            </Field>
            <Field name="repeatPassword">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Повторите пароль"
                    type="password"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="role">
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Select
                    {...field}
                    placeholder="Кто вы?"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                  >
                    <option value="customer">Я заказчик</option>
                    <option value="freelancer">Я Фрилансер</option>
                  </Select>
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
        </Form>
      )}
    </Formik>
  );
}
