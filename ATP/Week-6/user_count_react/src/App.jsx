import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
  return (
    <div className="container text-center mt-4">
      <UserCount />
      <Users />
    </div>
  );
}

export default App;