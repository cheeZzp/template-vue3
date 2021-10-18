(() => {

    interface Person {
        name: string;
        age: number
    }

    function showName(person: Person) {
        return person.name;
    }

    const person = {
        name: "zpzhang",
        age: 12
    }

    console.log(showName(person))
})()
