import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function Home() {
  return (
    <>
    <Flex direction="column" px={5} width="100%" height="90%">
      <Heading mb={5} mt={5}>Bienvenido a TODO APP</Heading>
      <Flex direction="column" width="100%" height="100%">
        <Text fontSize="2xl" fontWeight="bold" >
          Que encontrarás?
        </Text>
        <Text fontSize="large">
          En esta app podras realizar listados de tus rutinas diarias.
        </Text>
        <Text fontSize="2xl" fontWeight="bold" >
          Organiza tus rutinas diarias
        </Text>
        <Text fontSize="large">
          Nunca mas se te olvidara una rutina diaria con nosotros ven reliza
          un listado de tus tareas con nosotros que estaremos encantado en
          ayudarte.
        </Text>
      </Flex>
    </Flex>
    </>
  );
}

export default Home;
