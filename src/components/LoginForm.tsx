import { Stack, FormControl, Input, Button, useToast } from "@chakra-ui/react";
import { Formik, Field, FieldProps, Form } from "formik";
import { useNavigate, useOutletContext } from "react-router-dom";
import ApiClient from "../services/api-client";

export default function () {
  const navigate = useNavigate();
  const toast = useToast();

  const [setToken] =
    useOutletContext<[string | null, (token: string) => void]>();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, actions) => {
        ApiClient.loginUser({
          params: {
            email: values.email,
            password: values.password,
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
            <Field name="email">
              {({ field }: FieldProps) => (
                <FormControl isRequired>
                  <Input
                    {...field}
                    placeholder="Email для входа"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                    type="email"
                  />
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field }: FieldProps) => {
                return (
                  <FormControl isRequired>
                    <Input
                      {...field}
                      placeholder="Пароль"
                      type="password"
                      focusBorderColor="orange.900"
                      borderColor="blue.400"
                    />
                  </FormControl>
                );
              }}
            </Field>

            <Button
              colorScheme="buttonOrange"
              type="submit"
              mt={4}
              // onClick={() => navigate("/me")}
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
        </Form>
      )}
    </Formik>
  );
}
