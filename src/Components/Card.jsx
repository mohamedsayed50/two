import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import cartAtom from "../atoms/CartAtom";
import"./card.css"

export default function Card(props) {

   const  setCart = useSetRecoilState(cartAtom)

    return (
       <div className="col-sm-12 col-md-6 col-lg-3">
        <div class="card">
        <i class="fa-regular fa-heart i"></i>
        <img src={props.product.image} class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{props.product.name}</h5>
          <p class="card-text">{props.product.difficulty}</p>
          <Link  to={`/details/${props.product.id}`} class="btn btn-primary">Go somewhere</Link>
          <button onClick={()=>{
            toast.success("success")
            setCart((oldData)=>{
              let newcart = [...oldData , props.product]
              localStorage.setItem("cart" , JSON.stringify(newcart))
              return newcart
            })
            
          }} className="btn btn-primary mt-3">Add to Cart</button>
          <div className="icon">
          <i class="fa-regular fa-star"></i>
          <h5>5.0</h5>
          </div>
        </div>
        </div>
       </div>
    )
}