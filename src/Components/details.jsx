import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./details.css"

export default function Details() {

    const params = useParams()
    const [products , setProducts] =useState({})

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/${params.ID}`)
        .then(res => res.json())
        .then(data=>{
            setProducts(data)
        })
            
    })


    return (
        <section className="details">
            <div className="container">
                <div className="row">
                    <div>
                        <img src={products?.image} alt="" />
                    </div>
                    <div>
                        <p><span>Name :</span> {products?.name}</p>
                        <p><span>Instructions :</span> {products?.instructions}</p>
                        <p><span>MealType :</span> {products.mealType}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}