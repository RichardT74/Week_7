import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
		items: [
				{name: "Milk", purchased: true},
				{name: "Cheese", purchased: false},
				{name: "Beans", purchased: false}
		],
		newItem: ''
		},
		methods: {
			saveNewItem: function(e) {
				e.preventDefault();
       this.items.push({
				 name: this.newItem,
				 purchased: false
			 });
			 this.newItem = '';
		 },
		 buyItem: function (index) {
			 this.items[index].purchased = true;
		 }
		}
	});
});
