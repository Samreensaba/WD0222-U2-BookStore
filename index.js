window.onload=async()=>{
    try{
    const response = await fetch("https://striveschool-api.herokuapp.com/books")
    const books = await response.json()
    allBooks = books
    books.forEach(book=>{
        const bookCard = document.querySelector('.row')
        const col = document.createElement('div')
        col.className = "col-sm-6 col-md-4 col-lg-3 crd"
        col.innerHTML = `<div class="card">
                            <img src=${book.img} class="card-img-top" alt=${book.title}>
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">${book.category}</p>
                                <button class="btn btn-primary crtbtn"; id="${book.asin}" onclick= "addToCart(event)">Add to cart</button>
                                <button class="btn btn-primary" onclick="skip(event)">Skip</button>
                            </div>
                            </div>
        `
        bookCard.appendChild(col)  
    })
}
catch(err){
    console.log(err)
}
    
}
let allBooks= []

const addToCart = (clickevent) =>{
    let bookId = clickevent.target.id
    //console.log(allBooks)
    //console.log(clickedBtn)
   let foundBook = allBooks.filter((book)=>{
        return book.asin === bookId;
    })[0]
    //console.log(foundBook)
    
}
 




const skip=(event)=>{
    event.target.closest(".crd").remove();
}
