import { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField.jsx'
import TodoItem from './item/TodoItem.jsx'

const data = [
  {
    _id: 'wefw23',
    title: "It's your note!",
    isCompleted: false,
  },
]

const Home = () => {
  const [todos, setTodos] = useState(data)

  const changeTodo = (id) => {
    const copy = [...todos]
    const current = copy.find((t) => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id !== id))
  }

  return (
    <div className="text-white w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">
        Todo for Junior
      </h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home
