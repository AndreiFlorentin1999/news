import { Col, Container, Row } from "react-bootstrap";
import NewsCard from "./NewsCard";

export default function NewsCardList (props){

    const {newsList} = props;

// Mapam prin lista de stiri (newsList) si pentru fiecare item afisam un card cu stirea
    return (
    <Container>
        <Row>
            {newsList.map((news)=> {
                return (
                    <Col xs={12} md={6} lg={4} className="mb-4" key ={news.id}>
                        <NewsCard 
                        newsId = {news.id}
                        imgSrc = {news.thumbnail}
                        title = {news.title}
                        description = {news.description}
                        hasCloseButton={news.hasCloseButton}>
                        </NewsCard>
                    </Col>
                )
            })}
        </Row>
    </Container>
    )
}