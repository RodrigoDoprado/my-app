
// type cardsProps = {
//     id: any;
//     img: any;
//     title: any;
//     category: any;
// }

// props: cardsProps
export default function Card() {
    return (
        <div className="card mb-4">
            <a href="/produto">
                <div className="card-img">
                    <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..." />
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h4 className="h4">titulo</h4>
                    </div>
                    <div className="card-title-sub">
                        <div className="small text-muted">January 1, 2022</div>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                    {/* <a className="btn btn-primary" href="#!">Read more →</a> */}
                </div>
            </a>
        </div>
    )
}