// Definim actiunea pentru adaugare la favorite

export function addToFavorites(news) {
  return {
    type: "ADD_TO_FAVORITES",
    payload: news,
  };
}

// Definim actiunea pentru a scoate de la favorite

export function removeFromFavorites(newsId) {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: newsId,
  };
}
