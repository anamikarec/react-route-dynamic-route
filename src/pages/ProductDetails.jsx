import axios from "axios";
import { useEffect, useState } from "react";
import {Link,useParams} from "react-router-dom"

import Card from "../Components/Card"

const getProductById = (id) => {
    return axios.get(`https://json-dynamic-route.herokuapp.com/products/${id}`);
}
const ProductDetails = () => {
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [data,setData] = useState(null);

    const handleProduct = async () => {
        try{
            setIsLoading(true);
            const { data } = await getProductById(id);
            setData(data);
            setIsLoading(false);

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        handleProduct();
    },[id]);

    if(isLoading){
        return <div>...loading</div>
    }
    return (
        <>
        <div>
        <h3>Product Id : {id}</h3>
        <Card id={id} name={`${data.name}`} price={data?.price} url={data?.url} />
        </div>
        </>
    )
}

export default ProductDetails;