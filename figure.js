let figure = '';
let number = prompt ('Enter A Number:');
for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
        figure += '*';
    }
    figure += `\n`;
}
alert(figure);