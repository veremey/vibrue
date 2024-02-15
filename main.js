const app = Vue.createApp({
	data() {
		return {
			title: "Comedy event",
			tickets: 10,
			cart: 0,
			img: "https://picsum.photos/id/42/200/300",
			imgAlt: "cafe",
			img2: "https://picsum.photos/id/15/200/300",
			img2Alt: "berge",
			details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
		}
	},
	methods: {
		addCart(number = 1) {
			this.cart += number
			this.tickets -= number
		},
	},
})
