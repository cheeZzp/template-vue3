(function () {
    var Man = /** @class */ (function () {
        function Man(name, age) {
            this.height = 170;
            this.name = name;
            this.age = age;
        }
        return Man;
    }());
    function showMsgOfMan(man) {
        return "name:" + man.name + " age:" + man.age + " height" + man.height;
    }
    //实例化
    var person = new Man("小明", 18);
    console.log(showMsgOfMan(person));
})();
