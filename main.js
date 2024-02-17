const app = Vue.createApp({
	data() {
		return {
			title: "Comedy event",
			tickets: 10,
			cart: 0,
			image: "https://picsum.photos/id/15/200/300",
			imageAlt: "Bronze",
			img: "https://picsum.photos/id/42/200/300",
			imgAlt: "cafe",
			img2: "https://picsum.photos/id/15/200/300",
			img2Alt: "berge",
			details: ["Funny comics", "Mime artistry", "Satire", "Sketches"],
			ticketTypes: [
				{
					id: "bronzeTicket",
					name: "Bronze",
					image: "https://picsum.photos/id/15/200/300",
					tickets: 3,
					description: "This is a bronze level fun.",
				},
				{
					id: "silverTicket",
					name: "Silver",
					image: "https://picsum.photos/id/18/200/300",
					tickets: 10,
					description: "This is some silver level fun.",
				},
				{
					id: "goldTicket",
					name: "Gold",
					image: "https://picsum.photos/id/48/200/300",
					tickets: 40,
					description: "Go all in - this is the gold level!",
				},
			],
		}
	},
	methods: {
		addCart(number = 1) {
			this.cart += number
			this.tickets -= number
		},
		updateImage(id) {
			this.image = this.ticketTypes.filter((type) => type.id === id)[0].image
			this.imageAlt = this.ticketTypes.filter((type) => type.id === id)[0].name
		},
	},
	computed: {
		soldOut() {
			return this.tickets === 0
		},
	},
})
