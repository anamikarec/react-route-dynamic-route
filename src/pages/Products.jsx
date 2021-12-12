import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom"
const fetchProducts = () => {
  return axios.get("https://json-dynamic-route.herokuapp.com/products")
}

const Products = () => {

  const [data,setData] = useState(null);
  const [isLoading,setIsLoading] = useState(true);

  const handleFetchProduct = async () =>{
    try{
      setIsLoading(true);

      const {data} = await fetchProducts();
      setData(data);
    }
    catch(err){
      console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(()=>{
    handleFetchProduct();
  },[])

  if(isLoading){
    return <div>...loading</div>
  }
  return(
    <div>
    <h3>Products</h3>
    <div style={{display: 'flex', flexDirection: 'row',gap:"1rem",marginLeft:"10%",flexWrap:"wrap"}}>
    {
      data?.map((item)=>{
        return <>
        <div style={{border: '1px solid grey',height: '300px',padding:"20px",borderRadius:"5px"}}>
         <img src={item.url} alt="" width="150" height="150" style={{marginTop:"20px"}}/>
         <div style={{marginTop:"30px"}}>
        <p style={{marginLeft:"12px"}}>Item Name : {item.name}</p>
        <Link to = {`/products/${item.id}`} style={{textDecoration:"none",backgroundColor:"turquoise",border:"3px solid blue",padding:"5px",marginLeft:"20px",fontSize:"16px",fontWeight:"600",borderRadius:"5px",color:"black"}}>Show Product Info</Link>
        </div>
        </div>
          </>
      })
    }
    </div>
    </div>
  )

}
export default Products;