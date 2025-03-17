/*async function main (){
    console.log("Hello from main");
}
main();*/
//console.log("Hola Mundo");

async function main (){
    const req = await fetch('https://openlibrary.org/search.json?q=the+lord+of+the+rings');
    if (req.ok){
        const data = await req.json();
        console.log(data.docs[0].title);
        
    }
}
main();