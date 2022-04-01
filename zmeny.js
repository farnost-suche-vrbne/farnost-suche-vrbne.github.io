import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";



const firebaseConfig = {
apiKey: "AIzaSyAzizWt60XrCCUfTkoDlKGRy3Gi1MMi3aU",
authDomain: "farnost-suche-vrbne.firebaseapp.com",
projectId: "farnost-suche-vrbne",
storageBucket: "farnost-suche-vrbne.appspot.com",
messagingSenderId: "935604821192",
appId: "1:935604821192:web:d568b31a7acf31806659fd",
measurementId: "G-L4QHPFVED5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// stahování úkolů

const dbRef = ref(database)
get(child(dbRef, "aktuality")).then((snapshot) => {
	if (snapshot.exists()) {
		console.log(snapshot.val())

		// tvoření htmlka

		const divNadpis = document.createElement("div")
		divNadpis.className = "d-flex justify-content-center"


		const h1 = document.createElement('h1')
		h1.innerText = "Úkoly"
		h1.className = "mt-1"

		divNadpis.append(h1)

		/*const ul = document.createElement('ul')

		ul.className = "list-group list-group-flush"

		for (let ukol of snapshot.val()) {
			const li = document.createElement('li')

			li.className = "list-group-item d-flex justify-content-start align-items-start"

			const input = document.createElement("input")
			const div1 = document.createElement("div")
			const div2 = document.createElement("div")
			const div3 = document.createElement("div")
			const span = document.createElement("span")

		
			let today = new Date()
			let dd = today.getDate()
			let mm = today.getMonth() + 1
			let jeToNaZitraNeboDneska = ukol["datum"] == String(dd) + ". " + String(mm) + "." 
			|| ukol["datum"] == String(dd + 1) + ". " + String(mm) + "."

			input.type = "checkbox"
			input.className = "form-check-input me-2" 
			input.onclick = function(ev) {
				if (input.checked) {
					span.className = "badge bg-success rounded-pill"
				} else {
					if (jeToNaZitraNeboDneska) {
						span.className = "badge bg-danger rounded-pill"
					} else {
						span.className = "badge bg-primary rounded-pill"
					}
				}
			}

			div1.className = "fw-bold me-2"
			div1.innerHTML = ukol["predmet"]
		
			div2.innerHTML = ukol["nazev"]

			div3.className = "flex-fill"

			span.innerHTML = ukol["datum"]
			if (jeToNaZitraNeboDneska) {
				span.className = "badge bg-danger rounded-pill"
			} else {
				span.className = "badge bg-primary rounded-pill"
			}

			li.append(input)
			li.append(div1)
			li.append(div2)
			li.append(div3)
			li.append(span)

			ul.append(li)
		} */

		const body = document.querySelector('body')

		body.append(divNadpis)
		//body.append(ul)


		// když to není:

	} else {
		console.log("No data available")
	}
}).catch((error) => {
  	console.error(error)
})