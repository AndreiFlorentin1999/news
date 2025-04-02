import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/Favorites/actions";
import { useContext } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import './NewsCard.css';

// Caracterul "/" din id-ul unei stiri il deruteaza pe React Router, deci trebuie sa il codificam cu encodeURIComponent

export default function NewsCard (props) {
    const {favoriteDispatch} = useContext(FavoritesContext);
    const {newsId, imgSrc, title, description, hasCloseButton} = props;
    function handleRemoveFromFavorites(id){
        const actionResult = removeFromFavorites(id);
        favoriteDispatch(actionResult);

    }
    console.log(hasCloseButton);
    return (
        <Card className="newsCard d-flex flex-column justify-content-between align-items-center h-100">
            <Link to = {`/news/${encodeURIComponent(newsId)}`}>
            <Card.Img src = {imgSrc} variant = "top"/>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Link>
            {/* Daca avem buton de eliminare de la favorite atunci il afisam */}
            {hasCloseButton && (
                <Button variant="light" onClick={()=>{
                    handleRemoveFromFavorites(newsId)
                }}>
                    <span className="material-icons text-dark ">close</span>
                </Button>
            )}
        </Card>
    )
}