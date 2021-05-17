namespace variables{

    let testVar1;

    console.log(testVar1);
    console.log(typeof testVar1);


    let testVar2 = null;

    console.log(typeof testVar2);


    let x: [string, number];

    x=["hello", 10];
    x=["world", 20];
    //x=[10, "hello"];
    x=["hello", 10];

    var myNumber: number =1;

    let isValid: boolean = true;

    const apiKey : string = "sjhjdhsjdhsjhd";


    let arr1 = [1,2,3];
    let arr2 = [4,5,6];

    let copyArr =[...arr1];

    let mergeArr = [...arr1, ...arr2];

    let newArr = [...arr1, 7,8];


    let isValid1 : boolean = true;

    if(isValid1)
    {
        console.log("is valid");
    }

    if(isValid1)
    {
        console.log("is valid");
    }
    else 
    {
        console.log("not valid");
    }



    let message =isValid1 ? "Is Valid" : "Is not valid";


    enum AlertLevel
    {
        info,
        warning,
        error
    }

    function getAlert(level: AlertLevel)
    {
        switch(level)
        {
            case AlertLevel.info:
                console.log("info");
            break;
            case AlertLevel.warning:
                console.log("warning");
            break;
            default:
                throw new Error("Invalid args");


        }

        let i1: number =0;
        while (i1 < 5) {
            i1 += 1;
            console.log(i1);
        }

       
       
        let i2: number = 0;

        do {
            i2 += 1;
            console.log(i2);
        } while (i2 < 5);
    
        
        
        for(let i:number=0; i< 9; i++)
        {

        }
    
        let obj:any = {a:1, b:2, c:3};

        for(let key in obj)
        {
            //any logic
        }


        let iteratable = [10,20,30,40];

        for(let value of iteratable)
        {
            
        }

    
    }

    

}