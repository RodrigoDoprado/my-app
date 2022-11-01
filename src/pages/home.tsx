import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { Api } from "../service";
import Card from "../componete/card";
import { toast } from "react-toastify";

export default function Home() {

    const [data] = useState([]);
    useEffect(() => {
        try {
            getProduct()
        }
        catch (e) {
            alert(e);
        }
    }, [])

    const getProduct = async () => {
        const response = await Api.get("/product/index");
        if (response.status === 200) {
            toast.success(response.data);
        }
    }

    return (
        <>
            <Helmet><title>Home</title></Helmet>
            {/* <Haeder /> */}
            <section className="resume-section">
                <div className="resume-section-content">
                    {/* <div className="col-sm-3">
                        <Card />
                    </div> */}

                    {data.length > 0 ? 
                    (
                        <>
                            {data.map((item) => {
                                return (
                                    <div className="col-sm-3">
                                        <Card />
                                    </div>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            <div className="col mt-5">
                                <h1>Cards, Não Há Produtos / Verefique sua conexão com a API</h1>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}