import { useParams } from "react-router-dom";
import { getNewsDetailsEndpoint } from "../api/endpoints";
import { useFetch } from "../utils/hooks/useFetch";
import { getNewsDetails } from "../api/adaptors";
import Layout from "../components/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./NewsDetails.css"
import { getFormattedDate } from "../utils/date";
import { addToFavorites } from "../store/Favorites/actions";
import { useContext } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import { useState } from "react";

export default function NewsDetails () {
    //extragem functia care modifica state ul global pentru stiri favorite
    const {favoriteDispatch} = useContext(FavoritesContext);
    const [showAlert, setShowAlert] = useState(false);
    // Extragem parametrul {newsId} din URL
    let {newsId} = useParams();
    // Acum vrem ca id-ul stirii sa contina "/", iar pentru asta va trebui sa il decodam
    newsId = decodeURIComponent(newsId)
    // Generam endpoint-ul pentru a primi detaliile unei stiri singulare
    const newsDetailsEndpoint = getNewsDetailsEndpoint(newsId);
    // Cerem datele de la server
    const newsDetailsData = useFetch(newsDetailsEndpoint);
    // Adamptam datele venite de la server pentru ca nu avem nevoie de toate proprietatile pe care ni le trimtie API-ul
    const adaptedNewsDetails = getNewsDetails(newsDetailsData)

    const {author, content, date, description, image, thumbnail, title} = adaptedNewsDetails;

    // Formatam data:

    const formattedDate = getFormattedDate(date)
    function handleAddToFavorites(news){
        //apelam actiunea de adaugare la favorite 
        const actionResult = addToFavorites(news);
        favoriteDispatch(actionResult);
        // 🔹 Afișăm alerta timp de 2 secunde
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000);

    }


    return (
        <Layout>
            {/* 🔹 Alerta vizibilă doar când `showAlert` este `true` */}
            {showAlert && (
                <div className="fixed-top bg-success text-white text-center py-2">
                    Adăugat la favorite!
                </div>
            )}
            <Container className="newsDetails my-5">
                <Row className= "d-flex justify-content-center">
                    <Col xs = {12} lg = {8}>
                    <h1 className="mb-5 pt-3">{title}</h1>
                    <p className="fw-bold">{description}</p>
                    {/* De la API, imaginea ne vine sub forma e tag-ul de <figure> de HTML. Pentru a le afisa pe ecran, vom avea nevoie de prop-ul dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{__html: image}} className="mb-4"></div>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="fw-bold">
                            <p>{author}</p>
                            <p className="mb-0">{formattedDate}</p>
                        </div>
                        <Button onClick={()=>{
                                handleAddToFavorites({
                                    id: newsId,
                                    thumbnail,
                                    title,
                                    description,
                                    hasCloseButton: true
                                })
                            }}>Adauga la favorite</Button>
                    </div>
                    {/* Pentru continutul stirii, de la API primi tag-uri de HTML, deci trebuie din nou sa ne folosim de prop-ul dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{__html: content}}></div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}