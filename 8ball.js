function shakeMagic8Ball(){
    const question = prompt("What is you question?");

    if(question === null){
        document.getElementById('response-text').innerText = 'Please Ask A Question!';
        document.getElementById('response-text').classList = 'lead text-danger';
        document.getElementById('response-img').src = '8ball.png';   // in'' add new img link
    }

    if(!question.trim()){
        alert('Please ask a valid question!');
    }
    
    const randomNumber = Math.floor(Math.random()*8);
    let answer, img, color;

    switch(randomNumber){
        case 0:
            answer = '  ';
            img = 'Yes.png';  
            break;
        case 1:
                        answer = '  ';
            img = 'No.png';  
            break;
        case 2:
                        answer = '  ';
            img = 'Maybe.png';  
            break;
        case 3:
                        answer = '  ';
            img = 'ImNotSure.png';  
            break;
        case 4:
                        answer = '  ';
            img = 'OfCourse.png';  
            break;
        case 5:
                        answer = '  ';
            img = 'AskAgain.png';  
            break;
        case 6:
            answer = '  ';
            img = 'TryLater.png';  
            break;
        case 7:
            answer = '  ';
            img = 'ProbablyNot.png';  
            break;
        case 8:
            answer = '  ';
            img = 'IDK.png';  
            break;
        case 9:
            answer = '  ';
            img = 'MostLikely.png';  
            break;
    }

        document.getElementById('response-text').innerText = answer;
        document.getElementById('response-text').classList = `display-4 text-center strong ${color}`;
        document.getElementById('response-img').src = img;   
}