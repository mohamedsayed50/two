import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import cartAtom from "../atoms/CartAtom";
import { useEffect, useRef, useState } from "react";

export default function Navbar(props) {

  const [products , setProducts] = useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/recipes/tags')
     .then(res => res.json())
     .then(data=>{
      setProducts(data)
     });
  },[])


   const cart = useRecoilValue(cartAtom)


   const [searchInp , setSearchInp] = useState("")


    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" hrelf="#">Recipes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Cart">Cart {cart.length}</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            {
              products.map((Element)=>{
                
                return (
                  <li><a class="dropdown-item" href="#">{Element}</a></li>
                )
              })
            }
            
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <div class="d-flex" role="search">
        <input onChange={(e)=>{
          setSearchInp(e.target.value)
        }} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       
        <Link class="btn btn-outline-success" to={`/search/${searchInp}`} >Search</Link>
      </div>
    </div>
  </div>
</nav>
    )
}