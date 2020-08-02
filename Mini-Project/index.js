

const quotes = [`I believe everyone in the world is born with genius-level talent. Apply yourself to whatever you’re genius at, and you can do anything in the world
\n  Jay-Z  `,

`Just because something doesn't do what you planned it to do doesn't mean it's useless.
\n     Thomas A. Edison`,

`Alone we can do so little; together we can do so much.
 \n     Helen Keller`,
 
 `The world is full of willing people; some willing to work, the rest willing to let them.
\n      Robert Frost`,  

`To be in good moral condition requires at least as much training as to be in good physical condition.\n    
Jawaharlal Nehru`, 

`Pain is temporary. Quitting lasts forever.\n    
Lance Armstrong`,

`Leadership is the ability to get extraordinary achievement from ordinary people.\n    
Brian Tracy`,

`When we are no longer able to change a situation - we are challenged to change ourselves.\n    
Viktor E. Frankl`,


`Doing nothing is a great way to change nothing.\n    
Kid President`,

`Creativity is intelligence having fun.\n    Albert Einstein`,

`Having challenges in your life open doors for you.\n     Payal Kadakia`,


`Only put off until tomorrow what you are willing to die having left undone.\n     Pablo Picasso`,

`The most beautiful curve on a woman’s body is her smile.\n     
Bob Marley`,

`There are no great limits to growth because there are no limits of human intelligence, imagination, and wonder.\n     
Ronald Reagan`,

`If you know the enemy and know yourself you need not fear the results of a hundred battles.\n     
Sun Tzu`,

`If you want to change the world, start off by making your bed.\n     
William H. McRaven`,

`The only thing necessary for the triumph of evil is for good men to do nothing.\n     
Edmund Burke`,

`A man's pride can be his downfall, and he needs to learn when to turn to others for support and guidance.\n     
Bear Grylls`,

`Let go of your past, but never forget what it has taught you.\n     
Boonaa Mohammed`,

`Good judgment comes from experience, and a lot of that comes from bad judgment.\n     
Will Rogers`,

`I attribute my success to this - I never gave or took any excuse. \n     
Florence Nightingale` ]   

var seconds = 0;
function incrementSeconds() {
    seconds += 1;
    if (seconds % 10 == 0){
    newQuotes();
}
    console.log(seconds)
}

var change = setInterval(incrementSeconds, 1000);


function newQuotes (){
   const a = Math.floor(Math.random()*(20-01+1))+01;
   
        console.log(a)
    document.getElementById("showQuote").innerText = quotes[a];
}





