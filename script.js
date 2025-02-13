var num = Math.trunc(Math.random()*20+1);
console.log(num);
var score = 20;
var highScore = 0;

document.querySelector('.left').addEventListener('click',function(){

        //create a new random number
        num = Math.trunc(Math.random()*20+1);
        console.log(num);
        //return message and bg-color and return score 20
        document.querySelector('.retry').textContent = 'Start Guessing...';
        document.querySelector('.main').style.backgroundColor = 'black';
        document.querySelector('.square').style.width = '125px';
        document.querySelector('.square').textContent = '?';
        document.querySelector('.take_number').value = '';
        score = 20;
        document.querySelector('.score').textContent = score;
});

document.querySelector("#button").addEventListener('click',function(){

    //put in Number Function to check if number return 1 else return 0
    var guess = Number(document.querySelector(".take_number").value);

    //if guess is empty
    if(!guess){
        document.querySelector('.retry').textContent = '# No Number';
    }

    //number of try
    if(score>1){
        // check number
        if(num == guess){
            document.querySelector('.square').textContent = guess;
            document.querySelector('.retry').textContent = '# Correct Number';
            document.querySelector('.main').style.backgroundColor = '#60b347';
            document.querySelector('.square').style.width = '250px';
            if(score>highScore){
                flag = 0;
                highScore = score;
                document.querySelector('.high').textContent= highScore;
            }
        }else if(guess>num&&guess<=20){
            document.querySelector('.retry').textContent = '# Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }else if(guess<num && guess>0){
            document.querySelector('.retry').textContent = '# Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            //guess>20&&guess<1
            document.querySelector('.retry').textContent = '# <  Between 1 and 20 >';
        }
    //if number of try become = 0
    }else{
        document.querySelector('.retry').textContent = '# You lost...';
        document.querySelector('.score').textContent = 0;
    }

});


