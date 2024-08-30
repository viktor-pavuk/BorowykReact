import {Route, Routes} from "react-router-dom";
import './App.css';

import Layout from "./components/Layout/Layout";
import GardenPage from "./pages/GardenPage/GardenPage";
import TasksPage from "./pages/TasksPage/TasksPage";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<GardenPage/>}/>
          <Route path="tasks" element={<TasksPage/>}/>
          <Route path="friends" element={<FriendsPage/>}/>
          <Route path="shop" element={<ShopPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
