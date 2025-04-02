import { useContext } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import Layout from "../components/Layout";
import { Container } from "react-bootstrap";
import NewsCardList from "../components/NewsCardList";


export default function Favorites () {
    const {favoritesState} = useContext(FavoritesContext);
    // const {news} = favoritesState;
    
    const news = Array.isArray(favoritesState?.news) ? favoritesState.news : [];
    return (
        <Layout>
            <Container className="my-5">
              <h1 className="mb-5 pt-3">Stirile Tale Favorite</h1>
              {news.length === 0 ? (<p>Nu ai nici o stire adaugata la favorite</p>) : (<NewsCardList newsList={news} />)}
            </Container>
        </Layout>

    )
   
}