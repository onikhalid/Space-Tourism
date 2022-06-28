// HAMBURGER MENU
const ham = document.querySelector('.header__navMobile');
const mobileMenu = document.querySelector('.header__navMobile__links');

ham.addEventListener('click', ()=>{
    if (ham.classList.contains('open')){
        ham.classList.remove('open')
        mobileMenu.classList.remove('showMenu')
        mobileMenu.classList.add('hideMenu')
    }
    else{
        ham.classList.add('open')
        mobileMenu.classList.add('showMenu')
        mobileMenu.classList.remove('hideMenu')
        mobileMenu.classList.remove('hidden')
    }
})


//  DESTINATIONS
// Fetch info from json file and manipulate the DOM with it

const destImg = document.querySelector('.dmain__img')
const destContainer = document.querySelector('.dmain__options')
const destName = document.querySelector('.dmain__title')

 const Destination = async()=>{
     let data = await fetch('../data.json');
     let orgData = await data.json()
     let destination =await  orgData.destinations

    destination.forEach((destination, i) => {
        let name = destination.name
        let image = destination.images.webp
        let description = destination.description
        let distance = destination.distance
        let travel = destination.travel      

        let pic = document.createElement('img')
        pic.src = image
        pic.classList.add('dmain__img__dest', `img-${name}`)
        destImg.appendChild(pic)

        let Title = document.createElement('h3')
        Title.innerText = name
        Title.classList.add('heading3', `name-${name}`, 'destName')
        destName.appendChild(Title)
        
        let Desc = document.createElement('p')
        Desc.innerText = description
        Desc.classList.add('body-copy' , `desc-${name}`, 'desc')
        Desc.style.paddingBottom = '2rem' 
        Desc.style.borderBottom = 'solid 0.07px white' 
        destName.appendChild(Desc)
        

        let Distance = document.createElement('p')
        Distance.innerHTML =`<p><p class="nav-text">AVG. DISTANCE</p>${distance}</p>`
        Distance.classList.add('sub-heading1', `distance-${name}`, 'distance')
        Distance.style.display = 'flex'
        Distance.style.flexDirection = 'column'
        Distance.style.gap = '0.35rem'
        Distance.style.alignItems = 'center'
        destName.appendChild(Distance)
        
        let Time = document.createElement('p')
        Time.innerHTML =`<p><p class="nav-text">EST. TRAVEL TIME</p>${travel}</p>`
        Time.classList.add('sub-heading1', `time-${name}`, 'time')
        Time.style.display = 'flex'
        Time.style.flexDirection = 'column'
        Time.style.gap = '0.35rem'
        Time.style.alignItems = 'center'
        destName.appendChild(Time)

        
    });
    
}
Destination()




//  CREW
// Fetch info from json file and manipulate the DOM with it
const crewImg = document.querySelector('.cmain__img')
const crewContainer = document.querySelector('.cmain__title')

 const Crew = async()=>{
     let data = await fetch('../data.json');
     let orgData = await data.json()
     let crews =await  orgData.crew
     
        crews.forEach((crew, i) => {
         let name = crew.name
         let image = crew.images.png
        let role = crew.role
        let bio = crew.bio 

        let pic = document.createElement('img')
        pic.src = image
        pic.classList.add(`crewImg-${i}`)
        crewImg.append(pic)

        let Role = document.createElement('h3')
        Role.innerText = role
        Role.classList.add('sub-heading1', `crewTitle-${i}`, 'crewRole')
        crewContainer.appendChild(Role)
        
        let Name = document.createElement('p')
        Name.innerText = name
        Name.classList.add('heading4' , `crewName-${i}`, 'crewName')
        crewContainer.appendChild(Name)
        

        let Bio = document.createElement('p')
        Bio.innerText = bio
        Bio.classList.add('body-copy', `crewBio-${i}`, 'crewBio')
        crewContainer.appendChild(Bio)
        

        // MAKE OPTION CIRCLES DISPLAY SPECIFIC CONTENTS
        let options = document.querySelectorAll('.option')
        options.forEach((option, i)=>{
      
            // initially hide all other content apart from the default commander's
            if(Bio.classList.contains('crewBio-0' ) ){
                option.classList.remove('open')
                Name.classList.add('show')
                Name.classList.remove('hide')
                pic.classList.add('show')
                pic.classList.remove('hide')
                Bio.classList.add('show')
                Bio.classList.remove('hide')
                Role.classList.add('show')
                Role.classList.remove('hide')
           

            }
            else{

                option.classList.add('open')
                Name.classList.remove('show')
                Name.classList.add('hide')
                pic.classList.remove('show')
                pic.classList.add('hide')
                Bio.classList.remove('show')
                Bio.classList.add('hide')
                Role.classList.remove('show')
                Role.classList.add('hide')
                
            }
                
            // listen for option click and display appropriate content
            option.addEventListener('click', (event)=>{

                    // change currently selected option
                    let currentOption = document.querySelector('.whiteBack')
                    const opt = options[i].contains(event.target)
                    if(opt){
                        currentOption.classList.remove('whiteBack')
                        option.classList.add('whiteBack')
                    }
                    else{
                        option.classList.remove('whiteBack')
                    }

                    // display appropraite content for currently selected option
                    if(Bio.classList.contains(`crewBio-${i}` ) ){
                        option.classList.remove('open')
                        Name.classList.add('show')
                        Name.classList.remove('hide')
                        pic.classList.add('show')
                        pic.classList.remove('hide')
                        Bio.classList.add('show')
                        Bio.classList.remove('hide')
                        Role.classList.add('show')
                        Role.classList.remove('hide') 
                    }
                    else{
                        option.classList.add('open')
                        Name.classList.remove('show')
                        Name.classList.add('hide')
                        pic.classList.remove('show')
                        pic.classList.add('hide')
                        Bio.classList.remove('show')
                        Bio.classList.add('hide')
                        Role.classList.remove('show')
                        Role.classList.add('hide')
                    
                    }
            })
        })
    });

}

Crew()



//  TECHNOLOGY
// Fetch info from json file and manipulate the DOM with it
const techImg = document.querySelector('.tmain__img')
const techContainer = document.querySelector('.tmain__title')

 const Tech = async()=>{
     let data = await fetch('../data.json');
     let orgData = await data.json()
     let techs =await  orgData.technology

     techs.forEach((tech, i) => {
        let name = tech.name
         let image = tech.images.landscape
         let image2 = tech.images.portrait
        let desc = tech.description 

        // mobile and tablet image
        let pic = document.createElement('img')
        pic.src = image
        pic.classList.add('hideDesktop')
        pic.classList.add(`techImg-${i}`)
        techImg.append(pic)
        // desktop image
        let pic2 = document.createElement('img')
        pic2.src = image2
        pic2.classList.add('hideMobile', 'hideTablet')
        pic2.classList.add(`techImg2-${i}`)
        techImg.append(pic2)
        
        let Name = document.createElement('p')
        Name.innerText = name
        Name.classList.add('heading4' , `techName-${i}`, 'techName')
        techContainer.appendChild(Name)
        

        let Desc = document.createElement('p')
        Desc.innerText = desc
        Desc.classList.add('body-copy', `techDesc-${i}`, 'techDesc')
        techContainer.appendChild(Desc)
        

        // MAKE OPTION CIRCLES DISPLAY SPECIFIC CONTENTS
        let options = document.querySelectorAll('.option')
        options.forEach((option, i)=>{
      
            // initially hide all other content apart from the default commander's
            if(Desc.classList.contains('techDesc-0' ) ){
                option.classList.remove('open')
                Name.classList.add('show')
                Name.classList.remove('hide')
                pic.classList.add('show')
                pic.classList.remove('hide')
                pic2.classList.add('show')
                pic2.classList.remove('hide')
                Desc.classList.add('show')
                Desc.classList.remove('hide')
           
    
            }
            else{
    
                option.classList.add('open')
                Name.classList.remove('show')
                Name.classList.add('hide')
                pic.classList.remove('show')
                pic.classList.add('hide')
                pic2.classList.remove('show')
                pic2.classList.add('hide')
                Desc.classList.remove('show')
                Desc.classList.add('hide')
                
            }
                
            // listen for option click and display appropriate content
            option.addEventListener('click', (event)=>{
    
                    // change currently selected option
                    let currentOption = document.querySelector('.whiteCircle')
                    const opt = options[i].contains(event.target)
                    if(opt){
                        currentOption.classList.remove('whiteCircle')
                        option.classList.add('whiteCircle')
                    }
                    else{
                        option.classList.remove('whiteCircle')
                    }
    
                    // display appropraite content for currently selected option
                    if(Desc.classList.contains(`techDesc-${i}` ) ){
                        option.classList.remove('open')
                        Name.classList.add('show')
                        Name.classList.remove('hide')
                        pic.classList.add('show')
                        pic.classList.remove('hide')
                        pic2.classList.add('show')
                        pic2.classList.remove('hide')
                        Desc.classList.add('show')
                        Desc.classList.remove('hide') 
                    }
                    else{
                        option.classList.add('open')
                        Name.classList.remove('show')
                        Name.classList.add('hide')
                        pic.classList.remove('show')
                        pic.classList.add('hide')
                        pic2.classList.remove('show')
                        pic2.classList.add('hide')
                        Desc.classList.remove('show')
                        Desc.classList.add('hide')
                    
                    }
            })
        })
    });

}

Tech()
