(() => {
    interface IPerson {
        readonly name: string
        age: number
        money?: number

        say(): any
    }

    const girl: IPerson = {
        name: "zzp",
        age: 12,
        say() {
            console.log("hello")
        }
    }

    class Boy implements IPerson {
        name: string;
        age: number;

        say(){
            console.log("i say hello")
        }
        see(): any {
            console.log("i see")
        };

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        };
    }

    // const zp = new Boy("小明", 22)
    // // girl.name = ""
    // console.log(zp.name + zp.age);
    // zp.say()
    // zp.see()


    class Women {
        public name: string;
        private age: number;

        constructor(name:string,age: number) {
            this.name = name;
            this.age = age;
        }

        public getName() : string{
            return this.name;
        };

        public getAge() : number{
            return this.age;
        };

    }
    class Girl extends Women{

        constructor(name:string,age: number) {
            super(name,age);
        }
    }
    let littleGirl = new Girl("cp",18);
    console.log(littleGirl.getAge())
})()
