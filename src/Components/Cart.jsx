import { useRecoilState } from "recoil"
import cartAtom from "../atoms/CartAtom"
import"./cart.css"

export default function Cart(props) {


   const [cart , setCart]=useRecoilState(cartAtom)

   function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }

   console.log(cart)
    return (
        <section className="cart">
            <div className="container">
                <div className="row">
                <table class="table table-dark table-striped-columns">
                  <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>MealType</th>
                        <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                     {
                       cart.map((Element, index)=>{
                        return (
                            <tr>
                              
                              <td><img src={Element.image} alt="" /></td> 
                               <td>{Element.name}</td>
                               <td>{Element.mealType}</td>
                                <td><button onClick={()=>{
                                  setCart(removeItemAtIndex(cart , index))
                                }} className="btn btn-info">Delete</button></td>
                            </tr>  
                        )
                       })
                     }               
                  </tbody>
                </table>
                </div>
            </div>
        </section>
    )
}