
import Page404 from "./pages/Page404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewsDetails from "./pages/NewsDetails";
import NewsCategory from "./pages/NewsCategory";
import Favorites from "./pages/Favorites";
import { useReducer } from "react";
import { favoritesReducer, initialState } from "./store/Favorites/reducer";
import { FavoritesContext } from "./store/Favorites/context";
import { useLocalStorage } from "./utils/hooks/useLocalStorage";
import React from "react";
// NE DEFINIM RUTELE:

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/news/:newsId",
    element: <NewsDetails />,
  },
  {
    path: "/category/:categoryId",
    element: <NewsCategory />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

function App() {
  // PASUL 1 PT REDUCER: Dupa ce am creat context, reducer si actions vom initializa reducer-ul pentru stiri favorite folosing hook-ul useReducer, care are nevoie de un state initial si reducerul care modifica stateul
  //const [favoritesState, favoriteDispatch] = useReducer(favoritesReducer, initialState);
  const [favoritesFromStorage, setFavoritesFromStorage] = useLocalStorage("favoriteNews", []);
  // PASUL 2: Ne mai trebuie obiectul ce va contine valoarea contextului
  //const favoritesContextValue = { favoritesState, favoriteDispatch };
  const [favoritesState, favoriteDispatch] = useReducer(favoritesReducer, favoritesFromStorage);
  // PASUL 3: Mai jos, la Router Provider pasam state-ul global si dispatch-ul catre intreaga aplicatie, imbracand Router Provider cu FavouritesContext
  const favoritesContextValue = { favoritesState, favoriteDispatch };
  React.useEffect(() => {
    setFavoritesFromStorage(favoritesState);
  }, [favoritesState, setFavoritesFromStorage]);

  return (
    <div className="App">
      {/* Adaugam providerul de rutare necesar pentru a stii react-ul ce rute avem in aplicatie */}
      <FavoritesContext.Provider value={favoritesContextValue}>
        <RouterProvider router={appRouter} />
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
