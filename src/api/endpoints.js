const API_KEY = "f193c6b1-60b3-4d76-8d4c-c03ac7c500f0";

// pageNumber si pageSize vor avea valori default --> daca un parametru nu este trimis cand functia se apeleaza, inseamna ca acea variabila va lua valoarea default, care este specificata cand se defineste parametrul

// Catre API-ul de la guardian trebuie sa trimitem un payload care consta in mai multe query params: apiKey, section(category), show-fields (sa ne ofere toate detaliile despre stire), page-size(numarul de siri pe care sa le returneze) si page (numarul paginii curente)

//   Returnam link-ul aferent API-ului de la the Guardian cu queryParams de mai sus

// Functie ce returneaza mai multe stiri dupa o categorie:

export function getNewsCategoriesEndpoint(category, pageNumber = 1, pageSize = 20) {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page-size=${pageSize}&page=${pageNumber}`;

  return `https://content.guardianapis.com/search${queryParams}`;
}

// Functie ce returneaza endpoint-ul pentru o singura stire

export function getNewsDetailsEndpoint(newsId) {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;
  return `https://content.guardianapis.com/${newsId}${queryParams}`;
}
