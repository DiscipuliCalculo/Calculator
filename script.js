let firstNum;
let secondNum;
let previousId;
let targetId = '';

document.querySelectorAll('.num-btn').forEach(item => {
    item.addEventListener('click', event => {
        let targetId = event.target.id;
        workDisplayed(targetId);
    });
});

document.querySelectorAll('.oper-btn').forEach(item => {
    item.addEventListener('click', event => {
        previousId = targetId;
        targetId = event.target.id;
        let operatorSymbol = document.getElementById(targetId).textContent;

        if (targetId === 'clear') {
            firstNum = undefined;
            secondNum = undefined;
            operatorSymbol = undefined;
        };

        if (firstNum === undefined || isNaN(firstNum)) {
            firstNum = parseInt(document.getElementById('working-display').textContent);
        }
        else {
            console.log(previousId);
            console.log(targetId)
            if (document.getElementById('working-display').textContent != '') {
                secondNum = parseInt(document.getElementById('working-display').textContent);
                firstNum = operate (previousId, firstNum, secondNum);
            }
        }
        document.getElementById('working-display').textContent = undefined;
        console.log(targetId);
        previousDisplay (firstNum, operatorSymbol);
    });
});