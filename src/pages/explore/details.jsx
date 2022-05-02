
import { useEffect, useState } from 'react';
import Navbar from "../../components/Navbar/";
import { useParams } from "react-router-dom";


export default function Details(props) {
    const { name } = useParams();
    const [data, setData] = useState([])
    var res = require('./data.json');

    let country = res.find(el => el.name === name);



    useEffect(() =>   setData(country));
    return (
        <div>
            <Navbar />
          
            <div className="page-product">
                <div className="container">
                    <div className="product-detail">
                        <div className="product-gallery">
                            <img src={data.photo} alt />
                        </div>
                        <div className="product-detail-info">
                            <div className="product-detail-info__cont">
                                <h3 className="product-detail-info__category">
                                {data.name}
                                </h3>
                                <p className="product-detail-info__desc">
                                {data.more_info}
                                </p>
                                <div className="product-detail-info__quantity">
                                </div>
                                <div className="product-detail-info_action">
                        
                                </div>
                                <div className="product-detail-info__specifications">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

