const Card = ({id,name,price,url}) => {
return(
    // <div style = {{border:"1px solid black",display:"flex",gap:2,padding:5,margin:2}}>
    // <div></div>
    // <div></div>
    // </div>
    <div style={{display: 'flex',justifyContent:"center",border:"1px solid grey",width:"400px",margin:"auto",borderRadius:"10px"}}>
    <img src={url} alt="" width="200" height="200" style={{marginTop:"20px"}}/>
    <div style={{marginTop:"40px",textAlign:"Left"}}>
    <h3>Item Name : {name}</h3>
    <p>Price : ₹{price}</p>
    </div>
    </div>
)
}

export default Card;