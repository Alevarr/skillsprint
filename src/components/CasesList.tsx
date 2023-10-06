import { Fragment } from "react";
import { Text } from "@chakra-ui/react";
import useCases from "../hooks/useCases";
import CaseCard from "./CaseCard";

export default () => {
  const { data, error, isLoading } = useCases();
  if (error) return <Text ml={4}>{error.message}</Text>;
  return (
    <Fragment>
      {data?.results.map((value) => (
        <CaseCard caseObject={value} isLoading={isLoading}></CaseCard>
      ))}
    </Fragment>
  );
};
