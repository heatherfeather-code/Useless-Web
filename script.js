const queenWisdom = [
    {
        //image 1
        image: "img/queen1.jpg",
        caption: "Human's can be filthy! Make sure to clean between your toes to stay healthy!"
    },
    {
        //img 2
        image: "img/queen2.jpg",
        caption : "If you want to sunbathe like myself, make sure to scream at the door and refuse to move."
    },
    {
        //img 3
        image: "img/queen3.jpg",
        caption: "Human's are silly, and think they are funny when they put things on your head. Let them do it, it will make them think they are in control."
    },
    {
        //img 4
        image: "img/queen4.jpg",
        caption: "Make sure to play with your toys daily! If not your humans might get sad. Can you tell who is winning? I did, I won... isn't it obvious?"
    },
    {
        //img 5
        image: "img/queen5.jpg",
        caption: "Remember! Rest is important, your human can make a wonderful bed, I sleep my best on them. They very rarely move too! Its a wonderful perk!"

    },
    {
        image: "img/queen6.jpg",
        caption: "I know I'm preachy, but don't forget to eat your greens. Its healthy or something? I don't know I'm just a cat."
    },
    {
        image: "img/queen7.jpg",
        caption: "Humans often don't know how to organize without our help. Make sure to show them what to do. They do this thing called nagging, its annoying. "
    },
    {
        image: "img/queen8.jpg",
        caption: "My mother was surprised I even got up here. I don't know why they underestimate me? I am smarter than they are!"
    },
    {
        image:"img/queen9.jpg",
        captionFunny:"Queen.exe has stopped working.", 
        caption: "I was too stunned that you didn't know how to manipulate your humans!"
    }



];

function showRandomWisdom(){
    const randomIndex = Math.floor(Math.random()* queenWisdom.length);
    const wisdom = queenWisdom[randomIndex];

    document.getElementById("queen-img").src = wisdom.image;
    document.getElementById("queen-caption").textContent = wisdom.caption;

    const funnyCaption = document.getElementById("queen-funny-caption");
    funnyCaption.innerText = wisdom.captionFunny || "";

}

document.addEventListener("DOMContentLoaded",()=>{
    console.log("Document is ready!");
});

document.addEventListener("DOMContentLoaded", showRandomWisdom);
document.getElementById("refresh-btn").addEventListener("click", showRandomWisdom);