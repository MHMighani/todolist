import Layout from "./components/layout/layout";
import TodoLists from "./components/todoLists";
import TodoTasks from "./components/todoTasks";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <TodoLists />
        <TodoTasks />
      </Layout>
    </div>
  );
}

export default App;
