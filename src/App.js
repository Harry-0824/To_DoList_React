import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {
  GlobalStyle,
  AppContainer,
  AppHeader,
  AppTitle,
  AppSubtitle,
  HeaderSummary,
  HeaderSummaryValue,
  MainPanel,
  StatsGrid,
  StatCard,
  StatLabel,
  StatValue,
  ControlsRow,
  FilterButtonsContainer,
  FilterButton,
  ClearCompletedButton,
} from "./styles/AppStyles";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, dueTime) => {
    if (text.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        dueTime: dueTime,
      };
      setTodos((currentTodos) => [...currentTodos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const updateTodoTime = (id, newTime) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, dueTime: newTime } : todo
      )
    );
  };

  const updateTodoText = (id, newText) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const clearCompleted = () => {
    setTodos((currentTodos) => currentTodos.filter((todo) => !todo.completed));
  };

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;
  const progressMessage =
    totalTodos === 0
      ? "Plan the next focused task"
      : remainingTodos === 0
      ? "All tasks completed"
      : `${remainingTodos} task${remainingTodos === 1 ? "" : "s"} in focus`;

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <AppHeader>
          <div>
            <AppTitle>FocusFlow Todo</AppTitle>
            <AppSubtitle>質感高效待辦清單</AppSubtitle>
          </div>
          <HeaderSummary aria-live="polite">
            <HeaderSummaryValue>{progressMessage}</HeaderSummaryValue>
          </HeaderSummary>
        </AppHeader>

        <MainPanel>
          <TodoForm addTodo={addTodo} />

          <StatsGrid aria-label="Task progress summary">
            <StatCard>
              <StatValue>{totalTodos}</StatValue>
              <StatLabel>Total</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{completedTodos}</StatValue>
              <StatLabel>Completed</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>{remainingTodos}</StatValue>
              <StatLabel>Remaining</StatLabel>
            </StatCard>
          </StatsGrid>

          <ControlsRow>
            <FilterButtonsContainer aria-label="Todo filters">
              <FilterButton
                type="button"
                $active={filter === "all"}
                onClick={() => setFilter("all")}
              >
                All
              </FilterButton>
              <FilterButton
                type="button"
                $active={filter === "active"}
                onClick={() => setFilter("active")}
              >
                Active
              </FilterButton>
              <FilterButton
                type="button"
                $active={filter === "completed"}
                onClick={() => setFilter("completed")}
              >
                Completed
              </FilterButton>
            </FilterButtonsContainer>

            {todos.some((todo) => todo.completed) && (
              <ClearCompletedButton type="button" onClick={clearCompleted}>
                Clear completed
              </ClearCompletedButton>
            )}
          </ControlsRow>

          <TodoList
            todos={filteredTodos}
            filter={filter}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodoTime={updateTodoTime}
            updateTodoText={updateTodoText}
          />
        </MainPanel>
      </AppContainer>
    </>
  );
}

export default App;
