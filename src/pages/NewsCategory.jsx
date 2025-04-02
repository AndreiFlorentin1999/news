import { useParams, useSearchParams } from "react-router-dom";
import { getNewsCategoriesEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsList } from "../api/adaptors";
import Layout from "../components/Layout";
import { Card, Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";
import Pagination from "../components/Pagination";

export default function NewsCategory() {
    // Extragem parametrul venit in URL
    const {categoryId} = useParams()
    
  
    // extragem, qwery din searach pentri curent page
    const [queryParams] = useSearchParams();

    let currentPage = queryParams.get('page')
    if (!currentPage){
        currentPage = 1;
    }
    // Generam endpoint-ul catre care sa facem callul la server 
    const newsCategoryEndpoint = getNewsCategoriesEndpoint(categoryId, currentPage);
  // Fetch-uim datele de la The Guardian 
  const newsData = useFetch(newsCategoryEndpoint)
  // Adaptama datele venite de la server
  const adaptedNewsData = getNewsList(newsData)
    // In functie de parametrul primit in URL, decidem ce titlu sa aratam 
    let title = ""
    switch (categoryId) {
        case "technology":
            title = "Tech";
            break;
        case "football":
            title = "Football";
            break;
        case "education":
            title = "Educatie";
            break;
        default:
            break;
    }

    return (
        <Layout>
            <Container className="my-5">
                <h1 className="mb-5 pt-3">{title}</h1>
                {/* Afisam lista cu stiri */}
                <NewsCardList newsList = {adaptedNewsData}/>
                <Pagination active={currentPage} baseUrl={`/category/${categoryId}`} />
            </Container>
        </Layout>
    )
    
}