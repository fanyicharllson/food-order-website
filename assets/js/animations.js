
//Animation for testomonials in home page
document.addEventListener('DOMContentLoaded', function() {
    const testimonialBox = document.querySelectorAll('.testimonial-box');
    const fullMenuItem = document.querySelectorAll('.menu-item-full');
    const chefItems = document.querySelectorAll('.cheff-item')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    },{threshold: 0.4});

    testimonialBox.forEach(box => {
        observer.observe(box);
    })
    chefItems.forEach(item => {
        observer.observe(item);
    })
    fullMenuItem.forEach(menu => {
        observer.observe(menu);
    })

});
