import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import ApiClient from "../services/api-client";
import Case from "../entities/Case";
import categories from "../categories";

export default () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="buttonOrange" onClick={onOpen}>
        Разместить Заказ
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Создание заказа</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                title: "",
                description: "",
                budget: 0,
                category: "",
              }}
              onSubmit={async (values, actions) => {
                const apiClient = new ApiClient<Case>("/cases");
                await apiClient.postSingle({
                  params: {
                    title: values.title,
                    description: values.description,
                    budget: values.budget,
                    category: values.category,
                  },
                });
                actions.setSubmitting(false);
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing={4}>
                    <Field name="category" component="select">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Select
                            {...field}
                            placeholder="Выберите категорию"
                            focusBorderColor="orange.900"
                            borderColor="blue.400"
                          >
                            {categories.map((category) => (
                              <option value={category.slug}>
                                {category.name}
                              </option>
                            ))}
                          </Select>
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="title">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Input
                            {...field}
                            placeholder="Название заказа..."
                            focusBorderColor="orange.900"
                            borderColor="blue.400"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="description">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <Textarea
                            {...field}
                            placeholder="Описание заказа..."
                            focusBorderColor="orange.900"
                            borderColor="blue.400"
                          />
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="budget">
                      {({ field, form }: FieldProps) => (
                        <FormControl
                          isRequired
                          isInvalid={form.errors.name && form.touched.name}
                        >
                          <NumberInput
                            min={500}
                            step={100}
                            focusBorderColor="orange.900"
                            borderColor="blue.400"
                          >
                            <NumberInputField
                              {...field}
                              placeholder="Бюджет..."
                            />
                            <NumberInputStepper>
                              <NumberIncrementStepper />
                              <NumberDecrementStepper />
                            </NumberInputStepper>
                          </NumberInput>
                          <FormErrorMessage>
                            {form.errors.name}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Button colorScheme="buttonOrange" type="submit">
                      Добавить
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
