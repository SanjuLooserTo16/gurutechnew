import { Injectable } from '@angular/core';



const signupURL='https://sanjaybharath1.pythonanywhere.com/api/signup';
const signinURL='https://sanjaybharath1.pythonanywhere.com/api/signin';
const productsURL='https://sanjaybharath1.pythonanywhere.com/api/products';
@Injectable({
  providedIn: 'root'
})

export class EcommerceService {
  
  
  constructor() { }
  
  fetchToken(){
    return localStorage.getItem('token')
  }
  registrationService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(signupURL,options)
  }
  
  signinService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      body:JSON.stringify(data),
      headers:header
    }
    return fetch(signinURL,options)
  }
  ProductsService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(productsURL,options)
  }
  productDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}`,options)
  }
  addToCartService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/add_to_cart`,options)
  }
  cartListservice(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/cart`,options)
  }
  addTowishlistService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/add_to_wishlist`,options)
  }
  wishlistListservice(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/wishlist`,options)
  }
  placeOrderService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/place_order`,options)
  }
  OrderListService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/orders`,options)
  }
  orderCancelservice(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"PUT",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/orders/${id}/cancel`,options)
  }
  removeFromCartService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/cart/${id}`,options)
  }
  removeFromwishlistService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/wishlist/${id}`,options)
  }
  categoryService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/category`,options)
  }
  categoryDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/category/${id}`,options)
  }
  addReviewService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/add_review`,options)
  }
  addProductService(data:any,file:any){
   

    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let header=new Headers
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/add`,options)
  }
  productRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/remove`,options)
  }
  productEditService(id:any,data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let options={
      method:"PUT",
      headers:header,
      body:formdata
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/products/${id}/edit`,options)
  }

  categoryAddService(data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("icon", file, file.name);
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/category/add`,options)
  }
  categoryRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`https://sanjaybharath1.pythonanywhere.com/api/category/${id}/remove`,options)
  }
}
