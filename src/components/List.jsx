import React from "react";
import "./List.css";
import { GetThemeValue } from "./ThemeProvider";
import { GetList } from "./ListProvider";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

const List = () => {
  const { theme } = GetThemeValue();
  const { list, setList } = GetList();

  // Removes task from the list
  const removeTask = (taskId) => {
    setList((prevList) => prevList.filter((task) => task.id !== taskId));
  };

  // Handles checkbox states
  const handleCheckboxChange = (taskId) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  // Creates sortable task list
  const SortableTask = ({ task, index }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: task.id });
    const style = {
      transition,
      transform: CSS.Transform.toString(transform),
      borderBottom:
        index !== list.length - 1
          ? theme === "dark"
            ? "1px solid black"
            : "2px solid rgba(154, 140, 152, 0.7"
          : "none",
    };

    return (
      <li ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div id="taskNoButton">
          <input
            id={theme === "dark" ? "darkCheckbox" : "checkbox"}
            type="checkbox"
            checked={task.isChecked}
            onChange={() => handleCheckboxChange(task.id)}
          />
          <span>{task.task}</span>
        </div>
        <button
          className={theme === "dark" ? "buttonDark" : "button"}
          id="buttonRemove"
          type="button"
          onClick={() => removeTask(task.id)}
          aria-label={`Remove task: ${task.task}`}
        />
      </li>
    );
  };

  // Reorders list based on where the task was dropped
  const onDragEnd = (event) => {
    // active: Represents the draggable element that was actively dragged during the drag operation.
    // over: Represents the droppable element over which the active draggable element was dragged when the drag operation ended.
    const { active, over } = event;

    // If the active and over elements have the same ID, it means that the draggable element was dropped onto itself and no reordering is necessary.
    if (active.id === over.id) {
      return;
    }

    // Reordering of the list based on the drag-and-drop operation
    setList((list) => {
      const oldIndex = list.findIndex((task) => task.id === active.id);
      const newIndex = list.findIndex((task) => task.id === over.id);
      return arrayMove(list, oldIndex, newIndex);
    });
  };

  return (
    <div
      id="list"
      style={{
        background:
          theme === "dark"
            ? "rgba(34, 34, 59, 0.80)"
            : "rgba(242, 233, 228, 0.8",
        border:
          theme === "dark" && list.length !== 0
            ? "2px solid #39375b"
            : theme === "light" && list.length !== 0
            ? "2px solid rgb(34, 34, 59)"
            : "none",
        boxShadow:
          theme === "dark"
            ? "2px 5px 8px, rgba(242, 233, 228, 0.7)"
            : "2px 5px 10px rgba(74, 78, 105, 0.7)",
      }}
    >
      <ul>
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext items={list} strategy={verticalListSortingStrategy}>
            {list.map((task, index) => (
              <SortableTask
                key={task.id}
                task={task}
                index={index}
              ></SortableTask>
            ))}
          </SortableContext>
        </DndContext>
      </ul>
    </div>
  );
};

export default List;

// The <DndContext> manages the drag-and-drop interactions, while the <SortableContext> defines the sortable context for the list of tasks. Each task is represented by the <SortableTask> component, and the onDragEnd callback is triggered when a drag operation ends, allowing you to handle any necessary updates to the list.
