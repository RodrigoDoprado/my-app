
import "./navBar.css"

// type navBarProps = {
//     user: boolean;
// }
// props: navBarProps

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="/">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" href="/home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/filmes">Filmes</a></li>
                        <li className="nav-item"><a className="nav-link" href="/series">Series</a></li>
                        {/* {props.user ?<></>: <></>} */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}