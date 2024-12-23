const apiUrl= "https://quotes-api-self.vercel.app/quote";
const quote=document.getElementById("quote");
const author=document.getElementById("author")

async function getQuote(url) {
    const response =await fetch(url);
    var data=await response.json();
    console.log(data);
    quote.innerHTML=data.quote;
    author.innerHTML=data.author
    

}

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML,"Tweet Window","width=600, height=300")
}
