(()=> {
    interface Person {
        name: string;
        age: number
    }

    class Man {
        name: string
        age: number;
        height: number = 170

        constructor(name:string,age: number) {
            this.name =  name;
            this.age = age;
        }
    }

    function showMsgOfMan(man: Man) {
        return "name:" + man.name + " age:" + man.age + " height" + man.height
    }
    //实例化
    const person = new Man("小明", 18);
    console.log(showMsgOfMan(person));
})()
