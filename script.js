// Menu Hamburger
document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle');
	const menu = document.querySelector('.menu');

	if (menuToggle) {
		menuToggle.addEventListener('change', function () {
			menu.classList.toggle('open', this.checked);
		});

		// Fechar menu ao clicar em um link
		const menuLinks = menu.querySelectorAll('a');
		menuLinks.forEach(link => {
			link.addEventListener('click', () => {
				menuToggle.checked = false;
				menu.classList.remove('open');
			});
		});
	}

	// Carrosel
	const carouselTrack = document.querySelector('.carousel-track');
	const carouselSlides = document.querySelectorAll('.carousel-slide');
	const prevButton = document.querySelector('.carousel-prev');
	const nextButton = document.querySelector('.carousel-next');
	const carouselIndicators = document.querySelectorAll('.carousel-indicator');

	if (carouselTrack && carouselSlides.length > 0) {
		let currentIndex = 0;

		function updateCarousel() {
			const offset = -currentIndex * 100;
			carouselTrack.style.transform = `translateX(${offset}%)`;

			// Atualizar indicadores
			carouselIndicators.forEach((indicator, index) => {
				indicator.classList.toggle('active', index === currentIndex);
			});
		}

		function nextSlide() {
			if (currentIndex === null || currentIndex === undefined) {
				throw new Error('currentIndex is null or undefined');
			}

			if (currentIndex >= carouselSlides.length || currentIndex < 0) {
				throw new Error('currentIndex is out of bounds');
			}

			try {
				currentIndex = (currentIndex + 1) % carouselSlides.length;
				updateCarousel();
			} catch (error) {
				console.error(error);
				throw error;
			}
		}

		function prevSlide() {
			if (currentIndex === null || currentIndex === undefined) {
				throw new Error('currentIndex is null or undefined');
			}

			if (currentIndex >= carouselSlides.length || currentIndex < 0) {
				throw new Error('currentIndex is out of bounds');
			}

			try {
				currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
				updateCarousel();
			} catch (error) {
				console.error(error);
				throw error;
			}
		}

		function goToSlide(index) {
			if (index === null || index === undefined) {
				throw new Error('index is null or undefined');
			}

			if (index >= carouselSlides.length || index < 0) {
				throw new Error('index is out of bounds');
			}

			try {
				currentIndex = index;
				updateCarousel();
			} catch (error) {
				console.error(error);
				throw error;
			}
		}

		if (nextButton) nextButton.addEventListener('click', () => {
			try {
				nextSlide();
			} catch (error) {
				console.error(error);
			}
		});

		if (prevButton) prevButton.addEventListener('click', () => {
			try {
				prevSlide();
			} catch (error) {
				console.error(error);
			}
		});

		carouselIndicators.forEach((indicator, index) => {
			indicator.addEventListener('click', () => {
				try {
					goToSlide(index);
				} catch (error) {
					console.error(error);
				}
			});
		});

		// Auto-play (opcional)
		// setInterval(nextSlide, 5000);

		// Inicializar
		updateCarousel();

	// Lightbox para ampliar imagens
	const lightboxModal = document.getElementById('lightbox-modal');
	const lightboxImg = document.getElementById('lightbox-img');
	const lightboxClose = document.querySelector('.lightbox-close');
	const carouselImages = document.querySelectorAll('.carousel-slide img');

	let currentLightboxIndex = 0;
	let allLightboxImages = [];
	let currentCarouselId = null;

	if (carouselImages.length > 0) {
		carouselImages.forEach((img) => {
			img.style.cursor = 'pointer';
			img.addEventListener('click', function (e) {
				e.stopPropagation();
				
				// Encontrar a unidade do carousel que contém essa imagem
				const carousel = this.closest('.carousel');
				const carouselGrid = carousel.closest('[data-carousel-id]');
				const carouselId = carouselGrid ? carouselGrid.getAttribute('data-carousel-id') : null;
				
				// Se o carousel mudou, recarregar as imagens
				if (carouselId !== currentCarouselId) {
					currentCarouselId = carouselId;
					allLightboxImages = [];
					
					// Coletar apenas as imagens do carousel clicado
					if (carouselId) {
						const carouselContainer = carouselGrid.querySelector('.carousel-slide img');
						const parentCarousel = carouselContainer.closest('.carousel');
						const slides = parentCarousel.querySelectorAll('.carousel-slide img');
						slides.forEach((slide) => {
							allLightboxImages.push({
								src: slide.src,
								alt: slide.alt
							});
						});
					}
				}
				
				// Encontrar o índice da imagem clicada
				const images = carousel.querySelectorAll('.carousel-slide img');
				currentLightboxIndex = Array.from(images).indexOf(this);
				
				openLightbox(currentLightboxIndex);
			});
		});
	}

	function openLightbox(index) {
		if (allLightboxImages.length > 0 && index < allLightboxImages.length) {
			lightboxImg.src = allLightboxImages[index].src;
			lightboxImg.alt = allLightboxImages[index].alt;
			lightboxModal.classList.add('open');
			document.body.style.overflow = 'hidden';
			updateLightboxNavigation();
		}
	}

	function nextLightboxImage() {
		currentLightboxIndex = (currentLightboxIndex + 1) % allLightboxImages.length;
		lightboxImg.src = allLightboxImages[currentLightboxIndex].src;
		lightboxImg.alt = allLightboxImages[currentLightboxIndex].alt;
		updateLightboxNavigation();
	}

	function prevLightboxImage() {
		currentLightboxIndex = (currentLightboxIndex - 1 + allLightboxImages.length) % allLightboxImages.length;
		lightboxImg.src = allLightboxImages[currentLightboxIndex].src;
		lightboxImg.alt = allLightboxImages[currentLightboxIndex].alt;
		updateLightboxNavigation();
	}

	function updateLightboxNavigation() {
		const lightboxPrev = document.querySelector('.lightbox-prev');
		const lightboxNext = document.querySelector('.lightbox-next');
		const lightboxCounter = document.querySelector('.lightbox-counter');

		if (lightboxPrev) lightboxPrev.disabled = false;
		if (lightboxNext) lightboxNext.disabled = false;
		if (lightboxCounter) {
			lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${allLightboxImages.length}`;
		}
	}

	const lightboxPrev = document.querySelector('.lightbox-prev');
	const lightboxNext = document.querySelector('.lightbox-next');

	if (lightboxPrev) {
		lightboxPrev.addEventListener('click', (e) => {
			e.stopPropagation();
			prevLightboxImage();
		});
	}

	if (lightboxNext) {
		lightboxNext.addEventListener('click', (e) => {
			e.stopPropagation();
			nextLightboxImage();
		});
	}

	if (lightboxClose) {
		lightboxClose.addEventListener('click', function () {
			lightboxModal.classList.remove('open');
			document.body.style.overflow = 'auto';
		});
	}

	if (lightboxModal) {
		lightboxModal.addEventListener('click', function (e) {
			if (e.target === lightboxModal) {
				lightboxModal.classList.remove('open');
				document.body.style.overflow = 'auto';
			}
		});

		// Fechar com tecla ESC
		document.addEventListener('keydown', (event) => {
			if (lightboxModal.classList.contains('open')) {
				if (event.key === 'Escape') {
					lightboxModal.classList.remove('open');
					document.body.style.overflow = 'auto';
				} else if (event.key === 'ArrowRight') {
					event.preventDefault();
					nextLightboxImage();
				} else if (event.key === 'ArrowLeft') {
					event.preventDefault();
					prevLightboxImage();
				}
			}
		});
	}
	}
});