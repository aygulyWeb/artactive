$(document).ready(function () {
	$('.testimonials-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<img src="images/services-arrowl.png", class="next-img", alt="arrow">',
		prevArrow: '<img src="images/services-arrowr.png", class="prev-img", alt="arrow">',
		dots: false,
		autoplay: false,
		centerMode: true,
		centerPadding: '250px',
		speed: 1000,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerMode: false

				}
			},
			{
				breakpoint: 991,
				settings: {
					centerMode: false

				}
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: false
				}
			}
		]
	});
});

// Yandex-map
// ymaps.ready(function () {
// 	var myMap = new ymaps.Map('map', {
// 		center: [57.657129, 39.845870],
// 		zoom: 9
// 	}, {
// 		searchControlProvider: 'yandex#search'
// 	}),

// 		// Создаём макет содержимого.
// 		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
// 			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
// 		),

// 		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
// 			hintContent: 'Собственный значок метки',
// 			balloonContent: 'Это красивая метка'
// 		}, {
// 			// Опции.
// 			// Необходимо указать данный тип макета.
// 			iconLayout: 'default#image',
// 			// Своё изображение иконки метки.
// 			iconImageHref: '../images/map-arrow.png',
// 			// Размеры метки.
// 			iconImageSize: [30, 42],
// 			// Смещение левого верхнего угла иконки относительно
// 			// её "ножки" (точки привязки).
// 			iconImageOffset: [-5, -38]
// 		})

// 	myMap.geoObjects
// 		.add(myPlacemark)
// 		.add(myPlacemarkWithContent);
// });
// Google-Map
function initMap() {
	const uluru = { lat: 57.655477, lng: 39.8444731 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 17,
		center: uluru,
	});
	const marker = new google.maps.Marker({
		position: uluru,
		map: map,
	});
}