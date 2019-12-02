import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
new Vue({
	el: '#app',
	data: {
		message: 'Hello, world!'
	},
	methods: {
		changeMessage: function () {
			this.message = 'Why so nasty??';
		}
	}
  });
});
