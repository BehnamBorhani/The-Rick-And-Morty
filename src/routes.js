import Home from "./pages/Home/Home";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/characterDetails/:characterID", element: <CharacterDetails /> },
   { path: "*", element: <Home /> },
];

export default routes;
