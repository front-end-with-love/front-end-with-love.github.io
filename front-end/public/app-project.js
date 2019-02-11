var app = new Vue({
    el: '#app',
    data: {
    },
	computed: {
	},
	methods: {
		exampleMethod: function () {
			console.log('exampleMethod init!');
		}
	},
	mounted() {
		this.exampleMethod;
	}
});