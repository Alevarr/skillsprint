import {
  Button,
  FormControl,
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
            <Stack as="form" spacing={4}>
              <FormControl isRequired>
                <Select
                  placeholder="Выберите категорию..."
                  focusBorderColor="orange.900"
                  borderColor="blue.400"
                >
                  <option>Дизайн</option>
                  <option>Фронтенд</option>
                  <option>Бекенд</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <Input
                  placeholder="Название заказа..."
                  focusBorderColor="orange.900"
                  borderColor="blue.400"
                />
              </FormControl>
              <FormControl isRequired>
                <Textarea
                  placeholder="Описание заказа..."
                  focusBorderColor="orange.900"
                  borderColor="blue.400"
                />
              </FormControl>
              <FormControl isRequired>
                <NumberInput
                  min={500}
                  step={100}
                  focusBorderColor="orange.900"
                  borderColor="blue.400"
                >
                  <NumberInputField placeholder="Бюджет..." />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
              <Button colorScheme="buttonOrange" type="submit">
                Добавить
              </Button>
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
