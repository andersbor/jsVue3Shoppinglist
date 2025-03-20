Vue.createApp({
    data() {
        return {
            item: null,
            items: [
                { id: 1, name: "milk", quantity: 2 },
                { id: 2, name: "bread", quantity: 1 },
                { id: 3, name: "cheese", quantity: 1 },
                { id: 4, name: "eggs", quantity: 6 },
                { id: 5, name: "butter", quantity: 1 },
            ],
            newItem: { id: null, name: null, quantity: null },
            sortNameAscending: true,
            nameFragment: "",
        }
    },
    methods: {
        addItem() {
            this.newItem.id = this.items.length + 1;
            this.items.push(this.newItem);
        },
        sortById() {
            this.items.sort((a, b) => a.id - b.id);
        },
        sortByName() {
            if (this.sortNameAscending) {
                this.items.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                this.items.sort((a, b) => b.name.localeCompare(a.name));
            }
            this.sortNameAscending = !this.sortNameAscending;
        },
        sortByQuantity() {
            this.items.sort((a, b) => a.quantity - b.quantity);
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        },
        filterByName() {
            this.items = this.items.filter(item => item.name.includes(this.nameFragment));
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        }
    }
}).mount("#app")