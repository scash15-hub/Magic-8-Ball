function shakeMagic8Ball(){
    const question = prompt("What is you question?");

    if(question === null){
        document.getElementById('response-text').innerText = 'Please Ask A Question!';
        document.getElementById('response-text').classList = 'lead text-danger';
        document.getElementById('response-img').src = '8ball.jpg';   // in'' add new img link
    }

    if(!question.trim()){
        alert('Please ask a valid question!');
    }
    
    const randomNumber = Math.floor(Math.random()*8);
    let answer, img, color;

    switch(randomNumber){
        case 0:
            answer = 'Yes';
            img = '_';   // in'' add new img link
            color = 'text-success';
            break;
        case 1:
            answer = 'No';
            img = '_';   // in'' add new img link
            color = 'text-danger';
            break;
        case 2:
            answer = 'Maybe';
            img = '_';   // in'' add new img link
            color = 'text-warning';
            break;
        case 3:
            answer = 'Im Not Sure';
            img = '_';   // in'' add new img link
            color = 'text-info';
            break;
        case 4:
            answer = 'Of Course';
            img = '_';   // in'' add new img link
            color = 'text-success-emphasis';
            break;
        case 5:
            answer = 'Ask Again';
            img = '_';   // in'' add new img link
            color = 'text-warning-emphasis';
            break;
        case 6:
            answer = 'Try Later';
            img = '_';   // in'' add new img link
            color = 'text-primary-emphasis';
            break;
        case 7:
            answer = 'Probably Not';
            img = '_';   // in'' add new img link
            color = 'text-danger-emphasis';
            break;
        case 8:
            answer = 'I Dont Know';
            img = '_';   // in'' add new img link
            color = 'text-danger-subtle';
            break;
        case 9:
            answer = 'Try Again';
            img = '_';   // in'' add new img link
            color = 'text-success-subtle';
            break;
    }

        document.getElementById('response-text').innerText = answer;
        document.getElementById('response-text').classList = `display-4 text-center strong ${color}`;
        document.getElementById('response-img').src = img;   
}