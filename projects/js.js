const baseUrl = window.location.origin
const data = [
	{
		Title: "Roblox Game Visualizer",
		Description: "View & compare data from various roblox games, updated live with fancy slot animations. Uses Roblox's API to retreive data, click on any number to view its source.",
		Icon: baseUrl + "/roblox-game-visualizer/title.png",
		IconScale: 2.25,
		Redirect: baseUrl + "/roblox-game-visualizer"
	},
	{
		Title: "Password Generator",
		Description: "Generate a completely random password of any length with the click of a button! Choose to include letters, numbers, and symbols in generation.",
		Icon: baseUrl + "/password/title.png",
		IconScale: 1.5,
		Redirect: baseUrl + "/password"
	},
	{
		Title: "Ping",
		Description: "Check your internet's ping periodically. Shows a real-time graph of ping history, with optional ping rate settings for more accurate results.",
		Icon: baseUrl + "/ping/title.png",
		IconScale: 1,
		Redirect: baseUrl + "/ping"
	},
]

const baseValue = 10;
let max = 1;
function onPageLoad() {
	let baseContainer = document.getElementById('projectsContainer')
	for (let i = 0; i < data.length; i++) {
		if (data[i].IconScale && data[i].IconScale > max) {
			max = data[i].IconScale
		}
	}

	for (let i = 0; i < data.length; i++) {
		const project = data[i]

		let root = document.createElement('a')
		root.className = "projectContainer"
		root.href = project.Redirect

		let iconContainer = document.createElement('div')
		iconContainer.className = "projectIconContainer"

		let icon = document.createElement('img')
		icon.className = "projectIcon"
		icon.src = project.Icon
		let n = baseValue;
		if (project.IconScale) {
			n *= project.IconScale
		}
		icon.style.height = n + "vh"

		iconContainer.style.height = (max * baseValue) + "vh"

		let desc = document.createElement('p')
		desc.className = "projectDescription"
		desc.innerText = project.Description

		let openButton = document.createElement('div')
		openButton.className = "projectOpenButtonContainer"

		let href = document.createElement('a')
		href.className = "projectOpenButton"
		href.href = project.Redirect
		href.innerText = "Open"

		openButton.append(href)

		iconContainer.append(icon)
		root.append(iconContainer, desc, openButton)
		baseContainer.appendChild(root)
	}

	const main = document.getElementById('mainContainer')
	main.style.opacity = 0
	main.style.transform = "translateY(10vh)"
	main.style.transition = "opacity 0.5s, transform 0.5s;"
	main.style.opacity = 1
	main.style.transform = "translateY(0)"
}