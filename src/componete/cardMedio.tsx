
type cardsProps = {
    id: any;
    img: any;
    title: any;
    category: any;
}

export default function CardMedio(props: cardsProps) {
    return (
        <div className="card mb-4">
            <a href="/product/:id"><img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div className="card-body">
                <div className="small text-muted">January 1, 2022</div>
                <h2 className="card-title h4">{props.title}</h2>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                {/* <a className="btn btn-primary" href="#!">Read more →</a> */}
            </div>
        </div>
    )
}