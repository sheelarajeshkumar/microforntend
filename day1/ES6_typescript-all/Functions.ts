namespace functions_demo
{
    //named function

    function greet1(name?: string) : string{
        if(name)
        {
            return "HI" + name;

        }else {
            return "bye";
        }
    }

    //anonymous function 

    let greet2 = function(name?: string):string{
        if(name)
        {
            return "HI" + name;

        }else {
            return "bye";
        }
    }
    
    let greet3= (name:string):string =>{
        if(name)
        {
            return "HI" + name;

        }else {
            return "bye";
        }
    };

    let greet4: (name:string) => string = function(name:string):string{
        if(name)
        {
            return "HI" + name;

        }else {
            return "bye";
        }
    };


    function add(
        a: number, b:number, callback:(result: number) => void)
        {
            callback(a+b);

            
        }
}