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
    },
    {
        image:"img/queen10.jpg",
        caption: "Sometimes even cat's get annoyed...But I am perfect so I don't get annoyed often."
    },
    {
        image:"img/queen11.jpg",
        caption: "My parents like to play this game called hide and seek. I always win."
    }, 
    {
        image:"img/queen12.jpg",
        caption: "This is my pillow human, find your own... I am not sharing."
    }, 
    {
        image: "img/queen13.jpg",
        caption: "Mom sometimes plays with yarn, and keeps telling me no, but I don't listen. I am a cat, I do what I want."
    }, 
    {
        image: "img/queen14.jpg",
        caption: "Sometimes you just need to put your human in their place. Fingers are best for chewing. "
    }, 
    {
        image: "img/queen15.jpg",
        caption: "I never said I make sense, but the couch needed grooming!"
    }, 
    {
        image: "img/queen16.jpg",
        caption: "If you are going to follow my guide, you need to be an expert at squirrel hunting. I am the best squirrel hunter in the house."
    }, 
    {
        image: "img/queen17.jpg",
        caption: "If you feel sad lay in some sun. you will feel better I promise. My parents keep talking about seasonal depression or something... I don't know what that is."
    }, 
    {
        image: "img/queen18.jpg",
        caption: "You need to remind your humans that you are the boss. I am the boss, I am the queen. Especially when they intrude in my cardboard house."
    }, 
    {
        image:"img/queen19.jpg",
        caption: "If the box holds you, you sits. My mother kept yelling at me to get down, I don't see the problem."
    },
    {
        image:"img/queen20.jpg",
        caption:"What are you looking at? I am relaxing, jeez.. Never seen a cat sunbathe? Get a life!"
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