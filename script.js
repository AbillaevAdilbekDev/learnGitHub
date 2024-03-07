'use strict'
window.addEventListener('DOMContentLoaded',()=>{
	const body = document.querySelector("body")
	const nav = document.querySelector('nav')
	const logo = document.querySelector('.logo a')
	const navItems = document.querySelectorAll('.nav-item a')
	const darkBtn = document.querySelector('.dark')
	const lightBtn = document.querySelector('.light')
	darkBtn.addEventListener('click',()=>{
		body.style.backgroundColor = "black"
		nav.style.backgroundColor = "#444444"
		logo.style.color = "white"
		for(let i = 0;i<navItems.length;i++){
			let b = navItems[i]
			b.style.color = "#fff"
		}
	})
	lightBtn.addEventListener('click',()=>{
		body.style.backgroundColor = "white"
		nav.style.backgroundColor = "#cccccc"
		logo.style.color = "black"
		for(let i = 0;i<navItems.length;i++){
			let b = navItems[i]
			b.style.color = "black"
		}
	})
})