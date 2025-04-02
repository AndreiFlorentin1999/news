import { useNavigate } from "react-router-dom";
import BootstrapPagination from "react-bootstrap/Pagination";
//import './Pagination.css';

export default function  Pagination (props) {
    // componenta va primi ca si props numarul pagini care este activa , dar si rul-ul catre care redirectioneaza la clikck pe o noua pagina
    let {active, baseUrl} = props;
    // folosim hook-ul usenavigation
    let navigate = useNavigate();
    // daca nj primim nici o valoare pentru active , atunci pagina 1 este cea activa
    if(!active){
        active = 1;
    }
    //tinem intrun array stirile grupate pe pagini
    let items = [];
    
    for (let number = 1; number <= 5; number++) {
        items.push(
            <BootstrapPagination.Item
            key={number}
            active={number === Number(active)}
            id={active ? "pagination-active" : null}
            onClick={()=>{
                navigate(`${baseUrl}?page=${number}`)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            }}>{number}</BootstrapPagination.Item>
        )
    }
    return (
        <div className="d-flex justify-content-center">
            <BootstrapPagination className="pagination">
                {items}
            </BootstrapPagination>
        </div>
    )

}