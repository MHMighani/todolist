import Layout from "./components/layout/layout";
import TodoTasks from "./components/todoTasks";

import "./style.scss";

function App() {
  return (
    <div className="App">
      <Layout>
        <TodoTasks />
      </Layout>
    </div>
  );
}

export default App;
