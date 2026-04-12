document.addEventListener('DOMContentLoaded', function() {
	const genreBoxes = document.querySelectorAll('.genre-box');
	
	genreBoxes.forEach(box => {
		const header = box.querySelector('.genre-header');
		const content = box.querySelector('.genre-content');
		
		header.addEventListener('click', function(e) {
			e.preventDefault();
			const isOpen = box.classList.contains('active');
			
			// Close all other boxes
			genreBoxes.forEach(otherBox => {
				if (otherBox !== box && otherBox.classList.contains('active')) {
					closeBox(otherBox);
				}
			});
			
			// Toggle current box
			if (isOpen) {
				closeBox(box);
			} else {
				openBox(box);
			}
		});
	});
	
	function openBox(box) {
		const content = box.querySelector('.genre-content');
		box.classList.add('active');
		content.style.display = 'block';
		
		// Force reflow
		content.offsetHeight;
		
		content.style.maxHeight = content.scrollHeight + 'px';
		content.style.opacity = '1';
	}
	
	function closeBox(box) {
		const content = box.querySelector('.genre-content');
		box.classList.remove('active');
		content.style.maxHeight = '0px';
		content.style.opacity = '0';
		
		setTimeout(() => {
			if (!box.classList.contains('active')) {
				content.style.display = 'none';
			}
		}, 500);
	}
});
