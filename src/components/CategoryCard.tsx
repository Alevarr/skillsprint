import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import Category from "../entities/Category";
import useCaseQueryStore from "../store";
import { useNavigate } from "react-router-dom";

interface Props {
  category: Category;
}

export default ({ category }: Props) => {
  const navigate = useNavigate();
  const setCategory = useCaseQueryStore((state) => state.setCategory);

  return (
    <Card
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
        cursor: "pointer",
      }}
      boxShadow="lg"
      onClick={() => {
        setCategory(category);
        navigate("/cases");
      }}
    >
      <CardHeader>
        <Heading as="h2" size="md" fontFamily="Ubuntu">
          {category.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>Сайты "под ключ", Бэкенд, Фронтенд и другое</Text>
        <Badge colorScheme="blue" p={1} mt={2} borderRadius={4}>
          107
        </Badge>
      </CardBody>
    </Card>
  );
};
