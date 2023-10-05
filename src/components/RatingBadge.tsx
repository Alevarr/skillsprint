import { Badge } from "@chakra-ui/react";

interface Props {
  rating: number;
}
export default ({ rating }: Props) => {
  const color = rating > 4 ? "green" : rating > 3 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>
      {rating}
    </Badge>
  );
};
