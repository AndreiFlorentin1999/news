import Layout from "../components/Layout"
import {getNewsCategoriesEndpoint} from "../api/endpoints"
import { useFetch } from "../utils/hooks/useFetch";
import {getNewsList} from "../api/adaptors"
import NewsCardList from "../components/NewsCardList";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home () {

// Generam endpoint-urile pentru categoriile de stiri
const techNewsEndpoint = getNewsCategoriesEndpoint("technology", 1, 6);
const footballNewsEndpoint = getNewsCategoriesEndpoint("football", 1, 6);
const educationNewsEndpoint = getNewsCategoriesEndpoint("education", 1, 6);
console.log (techNewsEndpoint, footballNewsEndpoint)

// Fetch-uim datele de la server (mai jos sunt custom hookes --- Recupereaza!)

const techData = useFetch(techNewsEndpoint)
const footballData = useFetch(footballNewsEndpoint)
const educationData = useFetch(educationNewsEndpoint)

// Adaptam/parsam datele venite de la server

console.log(techData)
const adaptedTechData = getNewsList(techData)
const adaptedFootballData = getNewsList(footballData)
const adaptedEducationData = getNewsList(educationData)

    return (
        <Layout>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Tech</h1>
                    <NewsCardList newsList={adaptedTechData} />
                    <p>
                        Vezi toate stirile legate de tehnologie in sectiunea:{" "}
                        <Link to="/category/technology" className="text-secondary">
                            Tech
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Football</h1>
                    <NewsCardList newsList={adaptedFootballData} />
                    <p>
                        Vezi toate stirile legate de fotball in sectiunea:{" "}
                        <Link to="/category/football" className="text-secondary">
                            Football
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="tech my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Education</h1>
                    <NewsCardList newsList={adaptedEducationData} />
                    <p>
                        Vezi toate stirile legate de Educatie in sectiunea:{" "}
                        <Link to="/category/education" className="text-secondary">
                            Educatie
                        </Link>
                    </p>
                </Container>
            </section>
            <section className="my-5">
                <Container>
                    <h1 className="mb-5 pt-3">Favorite</h1>
                    <p>Vrei sa iti salvezi stirile favorite pentru a le recitit ma itarziu?</p>
                    <p>In cadrul fiecarui stiri gasesti un buton prin care poti adauga stirea la favorite</p>
                    <p>
                        Vezi sectiunea :{" "}
                        <Link to="/favorites" className="text-secondary">
                            Favorite
                        </Link>
                    </p>
                </Container>
            </section>
        </Layout>
    )
}