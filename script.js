$(document).ready(function(){
   
  function getQuote(){
    var quotes = [
      '"Experience is a brutal teacher, but you learn. My God, you learn…"', 
      '"The thought manifests as the word; the word manifests as the deed; the deed develops into character."', 
      '"The greatest tool you’ll ever own is your own body."',
      '"We must take sides. Neutrality helps the oppressor, never the victim. Silence encourages the tormentor, never the tormented. Sometimes we must interfere."',
      '"If you have a library and a garden, you have everything you need."',
      '"You should move to Texas, then buy yourself some land and a horse."',
      '"When you knock on the door and opportunity opens, you must be a very attractive person, or you might not be invited in."',
      '"Everyday, stand guard at the door of your mind."',
      '"I didn’t really know what I was doing, but I’d just pitch it."',
      '"Big achievements come one small advantage at a time. You’ve got to enjoy the journey."',
      '"We must be happy with what we’ve got, while in pursuit of what we want."',
      '"I want to see you grow into the person everyone wants to meet."',
      '"You become what you think about."',
      '"People with goals succeed because they know where they are going."',
      '"All you need is the plan, the road map, and the courage to press on to your destination."',
      '"Someone is sitting in the shade today because someone planted a tree a long time ago."',
      '"Bruhhhh, You are such a beast."',
      '"I choose a lazy person to do a hard job because a lazy person will find an easy way to do it."',
      '"Every book you read allows you to stand a little higher, so you can get the things on the higher shelf."',
      '"The past is a currency."',
      '"The casting call for love interest ended the moment you entered the room."'
    ];
    var author = [
      "-C.S. Lewis", 
      "-Buddha", 
      "-Unknown",
      "-Eli Wiesel",
      "-Cisero",
      "-Mrs. Ball",
      "-Jim Rohn",
      "-Jim Rohn",
      "-Josh Altman",
      "-Jim Rohn",
      "-Benjamin Franklin",
      "-My Favorite Boss",
      "-Earl Nightingale",
      "-Earl Nightingale",
      "-Earl Nightingale",
      "-Warren Buffet",
      "-Apryl Mae",
      "-Bill Gates",
      "-Jim Rohn",
      "-Jim Rohn",
      "-James F's Snap Story"
    ];
                     
    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];
    
    $("#text").text(randomQuote);
    $("#author").text(randomAuthor);
  }
  
    $("#new-quote").on("click", function(){
      getQuote();
    });
});