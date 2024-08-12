/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   getTasks: () => (/* binding */ getTasks),
/* harmony export */   toggleTask: () => (/* binding */ toggleTask)
/* harmony export */ });
// obtener la lista de tareas del alacenamiento del navegador "localStorage"
let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

// Función para poder llevar las tareas de la lista 
const getTasks = ( ) => tasks;

// Función para agregar una tarea a la lista de tareas
const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Función para eliminar una tarea de la lista
const deleteTask = (id) => {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Función para actualizar una tarea de la lista

const toggleTask = (id) => {
    tasks = tasks.map((task) => {
        if(task.id === parseInt(id)) {
            task.completed = !task.completed;
        }
        return task;

    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderTasks: () => (/* binding */ renderTasks)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");


// Función para mostrarle al usuario las tareas
const renderTasks = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = '';
    const tasks = (0,_task__WEBPACK_IMPORTED_MODULE_0__.getTasks)();

    tasks.forEach((tasks) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", tasks.id);

        // Añadir clase solo si la tarea está completada
        if(tasks.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
        ${tasks.text}
        <button class="delete"> Eliminar </button>
        <button class="toggle"> ${ tasks.completed === false ? "Completar" : "Deshacer" } </button>
        `;

        taskList.appendChild(li);
    });
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");



document.addEventListener("DOMContentLoaded", () => {
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();

    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;

        if(taskInput !== "") {
            (0,_task__WEBPACK_IMPORTED_MODULE_1__.addTask)(taskInput);
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
            // Limpiar el valor el input
            document.getElementById("task-input").value = "";
        }
    });

    document.getElementById("task-list").addEventListener("click", (e) => {
        if(e.target.classList.contains("delete")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            (0,_task__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(taskId);
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
        }

        if(e.target.classList.contains("toggle")) {
            const taskId = e.target.parentElement.getAttribute("data-id");
            (0,_task__WEBPACK_IMPORTED_MODULE_1__.toggleTask)(taskId);
            (0,_ui__WEBPACK_IMPORTED_MODULE_0__.renderTasks)();
        }
    });
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map