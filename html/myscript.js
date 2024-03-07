let rouletteNum = [0, 34, 10, 21, 28, 4, 18, 9, 
                27, 22, 12, 3, 17, 20, 11, 33, 
                2, 10, 32, "00", 15, 8, 25, 1, 
                31, 20, 14, 30, 7, 24, 29, 35,
                 6, 13, 23, 19, 5, 36];

let index;

let color;
let evenness;
let passing;

let result;

function spin(){

    //Get a random number and see what all its connected to.
    index = Math.floor((Math.random() * 38));

    if ((index % 2) === 0)
    {color = "Rouge"}
    else
    {color = "Noir"}

    if ((rouletteNum[index] % 2) === 0)
    {eveness = "Pair"}
    else
    {eveness = "Impair"}

    if (rouletteNum[index] < 18)
    {passing = "Manque"}
    else
    {passing = "Passe"}

    if (rouletteNum[index] === 0)
    {
        color = "Rouge"
        eveness = "Impair"
        passing = "Manque"
    }

    if (rouletteNum[index] === "00")
    {
        color = "Noir"
        eveness = "Pair"
        passing = "Passe"
    }

    //Put it in the chatbox!
    result = [rouletteNum[index], color, eveness, passing];
    console.log("spinny spin spin: ",result);
    let n = document.createTextNode(result);
    let messagediv = document.createElement("div");
    if( color == "Rouge" )
        messagediv.className = "rouge";
    if (color == "Noir")
        messagediv.className = "noir";
    messagediv.appendChild(n);
    sendIt();

}
