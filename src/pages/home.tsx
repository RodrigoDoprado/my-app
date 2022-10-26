import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Api } from "../service";
import CardMedio from "../componete/cardMedio";

export default function Home() {

    const [data, setData] = useState([]);
    useEffect(() => {
        try {
            getProduct()
        }
        catch (e) {
            alert(e);
        }
    }, [])
    const getProduct = async () => {
        const result = await Api.get("index");
        if (result.status === 200) {
            setData(result.data);
            // alert(result.data.message);
        }
    }


    return (
        <>
            <Helmet><title>Home</title></Helmet>
            {/* <Haeder /> */}
            <section className="resume-section">
                <div className="resume-section-content">
                    {data.length > 0 ? (<>
                        {data.map((item: any, index: any) => {
                            return (
                                <div className="col-sm-3">
                                    <CardMedio id={index}
                                        img={item.img}
                                        title={item.title}
                                        category={item.category}
                                    />
                                </div>
                            )
                        })}
                    </>) : (<>
                        <div className="col mt-5">
                            <h1>Cards, Não Há Produtos / Verefique sua conexão com a API</h1>
                        </div>
                    </>)}
                </div>
            </section>
        </>
    )
}