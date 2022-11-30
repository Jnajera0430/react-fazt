import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function About() {
  return (
    <Flex direction="column" height="90%"  px={5} width="100%" gap={5}>
      <Heading mb={5} mt={5}>Mas Sobre nosotros</Heading>
      <Text fontSize="large">
        Le damos la bienvenida a la app que te va ayudar con tu listamineto de
        tareas En ella podrás listar tus rutinas diarias en cualquier actividad
        que realices como: -Actividades de trabajos -Actividades laborales
        -Rutinas del GYM
      </Text>
      <Text fontSize="2xl" fontWeight="bold" >
        ¿Qué es mi producto y para que sirve?
      </Text>
      <Text fontSize="large">
        Buscamos dar orden a la vida de nuestros usuarios que en ella puedadn
        optimatizar y llevar de forma ordenada su actividades diarias.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" >
        ¿Cuáles son las funcionalidades más importantes y porque los usuarios tendrias ? 
      </Text>
      <Text fontSize="large">
        Mejorar eficiencia en el trabajo de los usuarios -Optimizar el tiempo
        en las actividades -Mejorar la vida de los usuarios.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" >
        ¿Qué es mi producto y para que sirve?
      </Text>
      <Text fontSize="large">
        Todo App es una aplicacion para listar tus rutinas diaras donde podras
        listar editar y borrar todas las planificaciones que relaices en tus
        actividades diarias.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" >
        ¿Cuáles son las funcionalidades más importantes y porque los usuarios
        las usarían?
      </Text>
      <Text fontSize="large">
        Listar, editar y borrar tus rutinas diarias teniedo la opcion de marcar
        como completada.
      </Text>
      <Text fontSize="2xl" fontWeight="bold" >
        ¿Cuáles son las funcionalidades que podrías incluir en el futuro?
      </Text>
      <Text fontSize="large">
        La aplicacion se está preparando para tener la funcionalidad de recordar
        al usuario sus tareas pendiente por medio de notificaciones para que el
        usuario pueda siempre cumplir sus objetivos del dia.
      </Text>
    </Flex>
    
  );
}

export default About;
