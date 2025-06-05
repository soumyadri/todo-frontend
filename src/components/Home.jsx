import React from "react";
import Button from "./Button";

export default function Home() {
    const todosCount = 5;
    const listOfTodos = [
        { id: 1, task: "Buy groceries", completed: false },
        { id: 2, task: "Walk the dog", completed: true },
        { id: 3, task: "Finish project report", completed: false },
        { id: 4, task: "Call mom", completed: true },
        { id: 5, task: "Read a book", completed: false }
    ];
    return (
        <div className="text-left align-left w-1/2 p-4">
            <div className="flex items-center gap-6 mb-4 border-b-2 border-gray-200 pb-4">
                <p className="font-bold text-gray-600 text-2xl">Today</p>
                <p className="font-bold text-gray-400 text-2xl">{todosCount}</p>
            </div>
            <div className="flex flex-col gap-4 mt-10 ml-4">
                <div className="flex">
                    <p>➕</p>
                    <p className="text-gray-400 text-md font-semibold ml-2">Add a new task</p>
                </div>
                {listOfTodos.map((todo) => (
                    <div key={todo.id} className="flex items-center gap-2 ml-1 justify-between bg-gray-100 p-2 rounded-lg shadow-sm hover:bg-gray-200 transition-colors">
                        <div className="flex items-center gap-2">
                            <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => console.log(`Toggle todo ${todo.id}`)}
                            className="cursor-pointer p-2 rounded border-gray-300"
                        />
                        <p className={`text-gray-700 ${todo.completed ? 'line-through' : ''}`}>
                            {todo.task}
                        </p>
                        </div>
                        <Button color="light" text=">" />
                    </div>
                ))}
            </div>
        </div>
    );
}