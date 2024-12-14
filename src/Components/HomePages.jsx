import { useEffect, useState } from "react";
import Card from "./Card";

export default function Home(props) {


    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then(data=>
            setProducts(data)
        );
    },[])


    return (
        <section className="home">
            <div className="container">
                <div className="row g-3">
                    {
                      products.recipes?.map((Element)=>{
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