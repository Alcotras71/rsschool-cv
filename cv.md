# **Andrey Alekseev**
<img alt="my_avatar" src="https://sun9-61.userapi.com/impf/c830400/v830400269/132458/n7axDEe3mg0.jpg?size=720x960&quality=96&proxy=1&sign=29d85d4bc02ecbd936ea7e2793009bf0&type=album" width=240 height=320>
_male, 22_

## Contacts
- Email: AimDragMan2@yandex.ru
- Tel: ***+7-(963)-223-21-37***
- Telegram: ***@Alcotras***
- Discord: ***Alcotras#2534***

## **Summary**

Hi, my name is Andrey and I am a junior Frontend-developer in a small web studio. Always for HTML coding i use *Gulp*, *Scss*, *Pug*. On my work i have different tasks like work with cms *Wordpress*, to right code on *native JavaScript* or use different libraries for work with *canvas* and *WebGL*. I really want to upgrade my skills, because I'm really love my job and that course is a chance to free boost my personal skills, to feel **more fun and comfort** with my job. 

## **Technical Skills**

- HTML5, CSS3, JavaScript, some PHP7
- frameworks: Vue, VueX, Nuxt.js, React, Redux
- Scss, Pug
- Wordpress
- command line, npm, npx
- Git
- Figma, AdobeXD, Avocode
- Webpack, Gulp
- Code Editor: Visual Studio Code, WebStorm
- Rest.API

## **Code examples**
Github profile: ***<https://github.com/Alcotras71>***

*small validation module on native JS*
```
const checkTextInputs = (selector) => {
	const txtInputs = document.querySelectorAll(selector);

	txtInputs.forEach(input => {
		input.addEventListener('keypress', function(e) {
			if (e.key.match(/[^а-яё 0-9]/ig)) {
				e.preventDefault();
			}
		});
	});

};

export default checkTextInputs;
```
