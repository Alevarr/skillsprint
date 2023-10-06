import {
  Stack,
  FormControl,
  Input,
  Button,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

interface FieldProps {
  field: any;
  form: any;
}
export default function () {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        role: "",
      }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
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
              {({ field, form }: FieldProps) => (
                <FormControl
                  isRequired
                  isInvalid={form.errors.name && form.touched.name}
                >
                  <Input
                    {...field}
                    placeholder="Надежный пароль"
                    type="password"
                    focusBorderColor="orange.900"
                    borderColor="blue.400"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
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
                    <option value="customer">Я закачик</option>
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
