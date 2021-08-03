for(i = 1; i <= 20; i++){
    if(i % 2 != 0 && i % 3 == 0) {
        document.write(i + '-' + 'I Love Coding' + '<br>')
    } else if (i % 2 != 0) {
        document.write(i + '-' + 'Santai' + '<br>')
    } else if (i % 2 == 0) {
        document.write(i + '-' + 'Berkualitas' + '<br>')
    }
}