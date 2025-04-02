export const initialState = {
  news: [],
};

export function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      // Asigură-te că state.news este un array valid
      const newsList = Array.isArray(state.news) ? state.news : [];

      // Caută dacă știrea este deja în listă
      const isInList = newsList.find((newsItem) => newsItem.id === action.payload.id);
      
      // Dacă știrea este deja în listă, nu facem nimic
      if (isInList) {
        return state;
      } else {
        // Dacă nu este, o adăugăm la începutul listei
        return {
          ...state,
          news: [action.payload, ...newsList],
        };
      }
    }
    
    case "REMOVE_FROM_FAVORITES": {
      // Verificăm dacă state.news este un array valid
      const newsList = Array.isArray(state.news) ? state.news : [];
      
      // Filtrăm știrile pentru a o elimina pe cea cu id-ul dat
      const filteredNews = newsList.filter((newsItem) => newsItem.id !== action.payload);

      return {
        ...state,
        news: filteredNews,
      };
    }

    default: {
      return state;
    }
  }
}
