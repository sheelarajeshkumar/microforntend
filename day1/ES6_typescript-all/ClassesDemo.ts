namespace classes_demo
{
    class Character{
        public fullname: string;

        public constructor(firstname:string, lastname:string)
        {
            this.fullname = `${firstname} ${lastname}`;
        }

        public greet(name?: string)
        {
            if(name)
            {
                return `Hi ${name} my name is ${this.fullname}`;
            }
        }
    }


    let spark = new Character("Nicholas", "John");

    let msg = spark.greet();

    let msg1 = spark.greet("Vishwanath Rao");

}