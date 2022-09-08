console.log('testimonials');

let names = ['Rohit', 'Arsalan', 'Arham', 'Ravi', 'Priya']
let testimonials = [
'1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.', '2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.', '3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.Lorem ipsum doloring elit. Nesciunt, voluptatum.', '4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.', '5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, voluptatum.'
]
let nam = document.querySelector('.nam')
let test = document.querySelector('.test')
let namesCount = 0
let testimonialsCount = 0 

let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')


nextBtn.addEventListener('click', ()=>{
    if(namesCount == names.length-1){
        namesCount=0
        testimonialsCount=0
    }
    else{
        namesCount++
        testimonialsCount++
    }

    let name = names[namesCount]
    let testimonial = testimonials[testimonialsCount]
    nam.innerHTML = (name)
    test.innerHTML = (testimonial)
})

prevBtn.addEventListener('click', ()=>{
if(namesCount <=0){
    namesCount=names.length-1
    testimonialsCount = testimonials.length-1
}
else{
    namesCount--
    testimonialsCount--
}


    let name = names[namesCount]
    let testimonial = testimonials[testimonialsCount]
    nam.innerHTML = (name)
    test.innerHTML = (testimonial)
})