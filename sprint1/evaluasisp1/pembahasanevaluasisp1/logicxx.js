for(y = 1; y < 10; y++) {
    for(x = 1; x < 10; x++) {
        if(x == y || x + y == 10 || x == 5 || y == 5) {
            document.write (" * ")
        } else {
            document.write (" __ ")
        }
    }
    document.write ("<br>");
}