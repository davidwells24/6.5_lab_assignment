function randomNameSelector() {
    // let names = ['David', 'Jeff', 'Bob', 'Samantha', 'Patrick', 'Jennifer', 'Olivia', 'Alex', 'Jameson', 'Jared'];
    // const randomIndex = Math.floor(Math.random() * names.length);

    // return names[randomIndex];
    return {
        names: ['David', 'Jeff', 'Bob', 'Samantha', 'Patrick', 'Jennifer', 'Olivia', 'Alex', 'Jameson', 'Jared'],
        name: '',
        pickName() {
            const randomIndex = Math.floor(Math.random() * this.names.length);
            this.name = 'Hello ' + this.names[randomIndex];
        }
    };
}