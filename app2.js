var randomPick = (n, min, max) => {
    if (n - 1 > max - min) {
        console.log("El array es demasiado pequeño")
    } else {
        var array = new Array;
        for (var i = 0; i < n; i++) {
            const range = max - min + 1;
            array[i] = Math.floor(Math.random() * range) + min;
            for (var j = 0; j < i; j++) {
                if (array[j] === array[i]) i--;
            }
        }
        console.log(array);
    }

}
randomPick(10, 1, 10)