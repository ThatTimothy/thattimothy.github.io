const baseUrl = "https://thattimothy.com"
const data = [
    {
        Title: "Crazy 8s",
        Description: "Play your new favorite tabletop game, Crazy 8s, on Roblox! Go against NPCs, Friends, or Foes. Featuring card animations, tons of customization, and professionally made cards, Crazy 8s is easy to learn & fun to play. Play on computer, mobile, or console! Battle & climb the leaderboards to become the best Crazy 8s player of all time. Welcome to Crazy 8s, the best card game on Roblox.",
        Icon: "https://thattimothy.com/games/icons/crazy8s.png",
        Redirect: "https://www.roblox.com/games/13772794683"
    },
    {
        Title: "The Tower Tycoon",
        Description: "Welcome to The Tower Tycoon, a tycoon were you build your own tower. Featuring Rebirths, Build animations, and tons of things to buy, The Tower Tycoon is a fun, up-to-date, modern tycoon. Can you climb the leaderboards to the top? PC and mobile compatible.",
        Icon: "https://thattimothy.com/games/icons/theTowerTycoon.png",
        Redirect: "https://www.roblox.com/games/2150928470"
    },
    {
        Title: "ThatTimothy's Admin House",
        Description: "Go through an easy mini-obby to get to the other side and receive access to use ThatTimothy's Admin, a custom admin that has hundreds of fun commands to use. This isn't your basic kohls admin house. It's ThatTimothy's Admin House!",
        Icon: "https://thattimothy.com/games/icons/adminHouse.png",
        Redirect: "https://www.roblox.com/games/2511084650"
    },
    {
        Title: "Stair Climbing Simulator",
        Description: "The most intense simulator on Roblox. The original stair climbing simulator. The more stairs you climb, the faster you go and the higher you can jump. Once you reach the top, you receive a huge boost and start from the bottom again. With hours of never ending fun, you can become the fastest stair climber in history and make it to the best of the best.",
        Icon: "https://thattimothy.com/games/icons/stairClimbingSimulator.png",
        Redirect: "https://www.roblox.com/games/1650248100"
    },
]

function onPageLoad() {
    let baseContainer = document.getElementById('projectsContainer')
    for (let i = 0; i < data.length; i++) {
        let line = document.createElement('p')
        line.className = "projectSeparator"
        baseContainer.append(line)

        const project = data[i]

        let root = document.createElement('a')
        root.className = "projectContainer"
        root.href = project.Redirect

        let icon = document.createElement('img')
        icon.className = "projectIcon"
        icon.src = project.Icon
        icon.style.height = "15vh"

        let textDiv = document.createElement('div')
        textDiv.className = "projectTextContainer"

        let title = document.createElement('p')
        title.className = "projectTitle"
        title.innerText = project.Title

        let desc = document.createElement('p')
        desc.className = "projectDescription"
        desc.innerText = project.Description

        let openButton = document.createElement('div')
        openButton.className = "projectOpenButtonContainer"

        let href = document.createElement('a')
        href.className = "projectOpenButton"
        href.href = project.Redirect
        href.innerText = "Play"

        openButton.append(href)

        textDiv.append(title, desc)
        root.append(icon, textDiv, openButton)
        baseContainer.appendChild(root)
    }

    const main = document.getElementById('mainContainer')
    main.style.opacity = 0
    main.style.transform = "translateY(10vh)"
    main.style.transition = "opacity 0.5s, transform 0.5s;"
    main.style.opacity = 1
    main.style.transform = "translateY(0)"
}