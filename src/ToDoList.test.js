import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./ToDoList";

function addToDo(toDoList, task="write rtl tests") {
  const taskInput = toDoList.getByLabelText("Task:");
  fireEvent.change(taskInput, { target: { value: task } });
  const button = toDoList.getByText("Add Task!");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<ToDoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new task", function() {
  const toDoList = render(<ToDoList />);

  // no boxes yet
  expect(toDoList.queryByText("x")).not.toBeInTheDocument();

  addToDo(toDoList);

  // expect to see a box
  const removeButton = toDoList.getByText("x");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.parentElement).toHaveTextContent("write rtl tests");
  // expect form to be empty
  expect(toDoList.getAllByDisplayValue("")).toHaveLength(1);

  // expect(asFragment()).toMatchSnapshot();
});

it("can remove a to do", function() {
  const toDoList = render(<ToDoList />);
  addToDo(toDoList);

  const removeButton = toDoList.getByText("x");

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
