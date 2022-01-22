import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";
import useLocalStorage from "../utils/useLocalStorage";

const ACTIONS = {
  CARGAR_TAREAS: "upload-todos",
  CREAR_TAREA: "create-todo",
  EDITAR_TAREA: "edit-todo",
  ELIMINAR_TAREA: "delete-todo",
  TOGGLE_TAREA: "toggle-tarea",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return cargarTodos(action);
    case ACTIONS.CREAR_TAREA:
      const newState = [...state, crearTodo(action.payload.tarea)];
      action.payload.guardarEnLocalStorage(newState);
      return newState;
    case ACTIONS.EDITAR_TAREA:
      return editTodo(state, action);
    case ACTIONS.ELIMINAR_TAREA:
      return deleteTodo(state, action);
    case ACTIONS.TOGGLE_TAREA:
      return toggleTodo(state, action);
    default:
      return state;
  }
}

function crearTodo(tarea) {
  return {
    id: Math.floor(Math.random() * 100),
    titulo: tarea,
    completado: false,
  };
}

function editTodo(state, action) {
  const newState = state.map((tarea) => {
    return tarea.id === action.payload.nuevaTarea.id
      ? {
          ...tarea,
          titulo: action.payload.nuevaTarea.titulo,
        }
      : tarea;
  });
  action.payload.guardarEnLocalStorage(newState);
  return newState;
}

function deleteTodo(state, action) {
  const newState = state
    .map((tarea) => (tarea.id === action.payload.id ? null : tarea))
    .filter((tarea) => tarea != null);
  action.payload.guardarEnLocalStorage(newState);
  return newState;
}

function toggleTodo(state, action) {
  const newState = state.map((tarea) => {
    return tarea.id === action.payload.id
      ? { ...tarea, completado: !tarea.completado }
      : tarea;
  });
  action.payload.guardarEnLocalStorage(newState);
  return newState;
}

function cargarTodos(action) {
  return action.payload.tareas;
}

export default function Principal() {
  // Estados del componente
  const [tareasDelStorage, actualizarTareasDelStorage] = useLocalStorage(
    "tareas",
    tareas
  );
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  // Ciclo de vida con hook useEffect
  useEffect(() => {
    dispatch({
      type: ACTIONS.CARGAR_TAREAS,
      payload: { tareas: tareasDelStorage },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    dispatch({
      type: ACTIONS.CREAR_TAREA,
      payload: { tarea, guardarEnLocalStorage: actualizarTareasDelStorage },
    });
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatch({
      type: ACTIONS.TOGGLE_TAREA,
      payload: { id, guardarEnLocalStorage: actualizarTareasDelStorage },
    });
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    dispatch({
      type: ACTIONS.EDITAR_TAREA,
      payload: {
        nuevaTarea,
        guardarEnLocalStorage: actualizarTareasDelStorage,
      },
    });
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    dispatch({
      type: ACTIONS.ELIMINAR_TAREA,
      payload: { id, guardarEnLocalStorage: actualizarTareasDelStorage },
    });
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          listaTareas={state}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}
