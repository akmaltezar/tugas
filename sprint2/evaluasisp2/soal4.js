for (var a = 1; a < 10; a++){
    for (var b = 1; b < 10; b++){
        if (a == b){
            document.write (a * 2 - 1)
        } else if (b == 9 - (a-1)){
            document.write (b * 2 - 2)
        } else if (b == 5) {
            document.write (a * 2 - 1 )
        } else if (a == 5) {
            document.write (b * 2 - 2 + ' ')
        }
        else {
            document.write ('---')
        }
    }
    document.write ('<br>')
}