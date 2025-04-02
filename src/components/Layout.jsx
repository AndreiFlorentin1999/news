import Header from "./Header"
import Footer from "./Footer"
import "./Layout.css"

// {/* Intre Header si Footer vom afisa copiii primiti de componenta */}


export default function Layout (props) {
    return (
        <div className="layout">
            <Header/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    )
}