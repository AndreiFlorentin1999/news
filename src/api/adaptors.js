// Ne definim o functie care in functie de raspunsului API-ului de la the Guardian ne va returna doar proprietatile de care noi avem nevoie in/pentru lista cu stiri

// Punem apiResponse ca parametru, pentru ca functia vrem sa ne returneze raspunsul de la API
// Daca raspunsul de la API nu contine date, atunci returnam un array gol

// Punem rezultatul raspunsului de la api intr-o constanta
// Mapam datele de la API si le transformam in formatul de care avem nevoie
//   Returnam datele parsate

export function getNewsList(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }

  const apiData = apiResponse.response.results;

  const adaptedData = apiData.map((news) => {
    return {
      id: news.id,
      thumbnail: news.fields.thumbnail,
      title: news.fields.headline,
      description: news.fields.trailText,
    };
  });

  return adaptedData;
}

// Ne definim o alta functie care parseaza datele despre o stire singulara
export function getNewsDetails(apiResponse) {
  if (!apiResponse || !apiResponse.response) {
    return [];
  }
  const apiData = apiResponse.response.content;
  //   Spre deosebire de mai sus, parsam datele despre stirea singulara. Nu avem nevoie de mapm pentru ca avem o singura stire.
  return {
    date: apiData.webPublicationDate,
    title: apiData.fields.headline,
    description: apiData.fields.trailText,
    image: apiData.fields.main,
    content: apiData.fields.body,
    author: apiData.fields.byline,
    thumbnail: apiData.fields.thumbnail,
  };
}
