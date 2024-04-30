document.getElementById('sequenceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    const firstNum = parseInt(document.getElementById('firstNum').value);
    const secondNum = parseInt(document.getElementById('secondNum').value);

    // Validate input
    if (isNaN(firstNum) || isNaN(secondNum) || firstNum <= 0 || secondNum <= 0 || firstNum % 2 === 0 || secondNum % 2 === 0) {
        alert('Please enter valid positive odd numbers.');
        return;
    }

    // Generate arithmetic sequence array
    const sequence = generateArithmeticSequence(firstNum, secondNum, 50);
    displaySequence(sequence, 'sequenceDisplay');

    // Reverse the sequence array
    const reversedSequence = sequence.slice().reverse();
    displaySequence(reversedSequence, 'reverseDisplay');
});

function generateArithmeticSequence(first, second, length) {
    const sequence = [first, second];
    const commonDifference = second - first;

    for (let i = 2; i < length; i++) {
        sequence.push(sequence[i - 1] + commonDifference);
    }

    return sequence;
}

function displaySequence(sequence, elementId) {
    const displayElement = document.getElementById(elementId);
    displayElement.innerHTML = `<p>${sequence.join(', ')}</p>`;
}
