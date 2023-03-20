const artwork = document.querySelectorAll('.preview-artwork');
artworkArr = 
console.log(artwork);

// artwork.addEventListener('click', function(){
//         this.classList.add('large-artwork');
//         anime({
//             targets: '.preview-artwork',
//             scale: 1.5,
//             easing: 'easeInOutQuad',
//             duration: 2000
//         });
// });


document.addEventListener('click', (e) =>
    {
    let element = e.target;
        if (element.className === 'preview-artwork') {
            // element.classList.add('large-artwork');
            anime({
                targets: element,
                scale: 1.2,
                easing: 'easeInOutQuad',
                duration: 1000
            });
        } else if (element.className === 'preview-artwork') {
            // element.classList.remove('large-artwork');
            anime({
                targets: element,
                scale: 1,
                easing: 'easeInOutQuad',
                duration: 500
            });
        }
        
    }
);