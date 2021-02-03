var person = ['Sid', 33, 'Male', 'EagleShieldBay'];
 
person.shift();
// document.writeln(person[2]);
 
var personFriends = ['Bob', 'Dylan', 'Aiizee', 'Deezee'];
 
// Perfect use case of an object
var user = {
    name: 'The kid',
    city: 'HereSneezedDuck',
    age: 33,
    friends: ['Bob', 'Dylan', 'Aiizee', 'Deezee'],
    isEvil: false,
    shoutout: function() {
        alert(`Shoutout to y'all!`);
    },
    levelUp: function () {
       return this.age++;
    }
};

var levelUpBtn = document.querySelector(".aging");
levelUpBtn.addEventListener('click', function() {
    firstOutput.innerHTML = `<br>My name is ${user.name} and I am ${user.levelUp()} and I live in ${user.city}`;
})

var firstOutput = document.getElementById("userInfo");
 
for(var i = 0; i < user.friends.length; i++) {
    console.log(user.friends[i]);
}
 
// use forEach if array
user.friends.forEach(function(friend) {
    console.log(friend)
})
 
// console.log(user.age)
// user.age++;
// console.log(user.age)

var posts = [
    {
        author: "Carl-Jan",
        comment: "Hey catz rules!"
    },
    {
        author: "Arnold",
        comment: "Noway dude! Dogz rules!"
    },
    {
        author: "Kamala",
        comment: "Calm down. Both are equally nice"
    }
]

//Html Reference
var postOutput = document.querySelector(".posts")


posts.forEach(function(post) {
    postOutput.innerHTML += `Author: ${post.author} <br> Commented: ${post.comment} <br><br>`;
})

var input = document.querySelector(".updateCity");
var city = document.querySelector(".posts .city")
input.addEventListener('keydown', function(e){
    if(e.key === 'Enter') {
        city.innerHTML = input.value;
        document.body.style.backgroundColor = '#007CF7'
        document.body.style.transform += "rotate(10deg)"
    }
})

var toggle = document.querySelector(".btnToggle");
toggle.addEventListener('click', function(){
    // Bad way
    // city.style.fontWeight = "bold";
    // city.style.fontSize = "32px";
    // city.style.color = "#639";
    // city.style.textShadow = "2px 2px 2px #000";

    //Good way
    city.classList.toggle("changeText");
})


/*
***************************************
Create your own code - movieDB
***************************************
*/
// Create an array of movie objects
// Each movie should have a title, rating and hasWatched properties
// Iterate through the array with a forEach and print out something that looks like:
/* 
   - You have seen "Frozen" - 4.5 stars
   - You have not seen "Django" - 5 stars
   - You have seen "Vaiana" - 5 stars
   - You have not seen "Shawshank Redemption" - 5 stars
*/


var movies = [
    {
        title: "Frozen",
        seen: "You have seen",
        rating: "4.5 stars"
    },
    {
        title: "Django",
        seen: "You have not seen",
        rating: "5 stars"
    },
    {
        title: "Vaiana",
        seen: "You have seen",
        rating: "5 stars"
    },
    {
        title: "Shawshank Redemption",
        seen: "You have not seen",
        rating: "5 stars"
    }
]

var movieOutput = document.querySelector(".movies")

movies.forEach(function(movie) {
    movieOutput.innerHTML += `Title: ${movie.title} <br> Seen: ${movie.seen} <br> Rating: ${movie.rating} <br><br>`;
})