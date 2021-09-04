"use strict";

//Add Task button elements.
var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

//Step 2: Wrap it up in a function:
var createTaskHandler = function () {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task";
  taskToDoEl.appendChild(listItemEl);
};
//Step 1 Button event handler.
buttonEl.addEventListener("click", createTaskHandler);
