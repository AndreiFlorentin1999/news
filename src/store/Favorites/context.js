// Cream contextul pentru store-ul de Favorite

import { createContext } from "react";
import { useLocalStorage } from "../../utils/hooks/useLocalStorage";

export const FavoritesContext = createContext();
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useLocalStorage("favoriteNews", []);

    function favoriteDispatch(action) {
        let newFavorites;
        switch (action.type) {
            case "ADD_TO_FAVORITES":
                newFavorites = [...favorites, action.payload];
                break;
            case "REMOVE_FROM_FAVORITES":
                newFavorites = favorites.filter(item => item.id !== action.payload.id);
                break;
            default:
                newFavorites = favorites;
        }
        setFavorites(newFavorites);
    }

    return (
        <FavoritesContext.Provider value={{ favoriteState: favorites, favoriteDispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
}