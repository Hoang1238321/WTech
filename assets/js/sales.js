// FAQ Accordion Functionality for Sales Page
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        // Add click event to question
        question.addEventListener('click', function() {
            // Close other items (one open at a time)
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Product Card Button Handlers
    const productDescriptions = {
        'Premium Subscription': 'Enjoy unlimited access to our exclusive music catalog with premium quality audio and offline downloads available across all your devices.',
        'Quality Instruments': 'Handpicked selection of high-quality musical instruments suitable for beginners, enthusiasts, and professional musicians alike.',
        'Online Courses': 'Comprehensive online courses taught by experienced music professionals covering various genres and skill levels.'
    };

    const productButtons = document.querySelectorAll('.products-grid .product-btn');
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productCard = button.closest('.product-card');
            const productTitle = productCard.querySelector('.product-info h3').textContent;
            const description = productDescriptions[productTitle];
            alert(`${productTitle}\n\n${description}`);
            console.log(`Product Selected: ${productTitle}\nDescription: ${description}`);
        });
    });

    // Pricing Plan Button Handlers
    const pricingButtons = document.querySelectorAll('.pricing-grid .product-btn');
    pricingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const message = 'Payment is currently unavailable. Please try again later.';
            alert(message);
            console.log(`Pricing Plan Selected - ${message}`);
        });
    });
});
