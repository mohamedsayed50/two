import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from "./Card"

export default function Search() {


    const params = useParams()
    const [product , setProduct]=useState({})
    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes/search?q=${params.type}`)
        .then(res => res.json())
        .then(data=>{
            setProduct(data)
        });
    },[params])


    return (
        <section className="home">
            <div className="container">
                <div className="row g-3">
                    {
                      product.recipes?.map((Element)=>{
                        return (
                            
                            <Card product={Element} />
                        )
                      })
  
                    }
                    
                    
                </div>
            </div>
        </section>
    )
}