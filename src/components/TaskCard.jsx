import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { VscEdit } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import "../index.css";
import { editTask } from "../Hooks/EditTask";
import { deleteTask } from "../Hooks/DeleteTask";
import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
function TaskCard({ task }) {
  const { upDateEstado } = useContext(TaskContext);
  const [form, setForm] = useState(false);
  const [clase, setClase] = useState("label");
  const [value, setValue] = useState("");

  /* const checkBox = (id) => {
    if (estado) {
      upDateEstado(id)
      setClase("label");
      
    } else if (!estado) {
      upDateEstado(id); 
      setClase("label-underline");    
    }
  }; */
  const detectedModeDark = useColorModeValue("gray.500","gray.500")
  return (
    <Flex direction="column" width="100%" mt={10} background={detectedModeDark}>
      <Flex direction="row" height="50px" >
        <Box width="4rem" display="flex" justifyContent="center">
          <input
            type="checkbox"
            name="check"
            checked={task.estado}
            onClick={() => {
              upDateEstado(task.id);
            }}
            readOnly
          />
        </Box>
        <Flex direction="column" gap={3}>
          <Box id={task.label}>
            <h1 className="text-xl font-bold w-full ">{task.title}</h1>
          </Box>
          <Box>
            <p className="text-sm font-light w-80">{task.description}</p>
          </Box>
        </Flex>
        
        <div className="w-10 flex">
          <button
            className="text-blue-500   py-1 rounded-md  hover:text-blue-300"
            onClick={() => {
              if (!form) {
                setForm(true);
              } else {
                setForm(false);
              }
            }}
          >
            <FiEdit />
          </button>
          <button
            className="text-red-500  pl-1 py-1 rounded-md  hover:text-red-300"
            onClick={() => deleteTask(task.id)}
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </Flex>

      <div id="form" className="h-12">
        {form ? (
          <form action="">
            <input
              type="text"
              defaultValue={task.title}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                editTask(task.id, value, task.title);
                setForm(false);
              }}
            >
              <VscEdit />
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </Flex>
  );
}

export default TaskCard;
