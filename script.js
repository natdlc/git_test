let x = 'purple';

switch (x) {
    case 'black':
    case 'red':
    case 'white':
        console.log('paired');
        break;
    case 'orange':
    case 'purple':
    case 'green':
        console.log('reverse-paired');
        break;
    default:
        console.log('error');
}