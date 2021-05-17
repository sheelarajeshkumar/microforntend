function demo() {
    var x = 1;
    let y = 2;
    const z = 3;
    {
        var x = 100;
        let y = 200;
        const z = 300;
        console.log(x,y,z)
    }

    console.log(x,y,z)
}
demo();

