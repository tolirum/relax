const board = document.querySelector('#board')
const SQUARES_NUMBER = 400
const colors = ['#ff1744','#f50057','#d500f9','#651fff','#3d5afe','#2979ff', '#00b0ff', '#00e5ff', '#1de9b6', '#00e676', '#76ff03', '#c6ff00', '#ffea00', '#ffc400', '#ff9100', '#ff3d00']

for (let i=0; i<SQUARES_NUMBER;i++) {
	const square = document.createElement('div')
	square.classList.add('square')
	square.addEventListener('mouseover', ()=> 
		setColor(square))
	square.addEventListener('mouseleave', ()=> 
		removeColor(square))

	board.append(square)
	}

	function setColor(element) {
		const color = getRandomColor()
		element.style.background = color
		element.style.boxShadow = `0 0 3px ${color},
		 0 0 10px ${color}`
	}
	function removeColor(element) {
		element.style.background = '#1d1d1d'
		element.style.boxShadow = `0 0 3px #000`
	}
	function getRandomColor() {
		const index = Math.floor(Math.random() * colors.length)
		return colors[index]
	}