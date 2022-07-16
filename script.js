const form=document.querySelector(".form")
const calculateBtn=form.querySelector("button")
const txtInput=form.querySelector("input")
const load=document.querySelector(".load")
const planets=form.querySelector("select")
let selectedPlanets=planets.options
const answers=load.querySelector(".box .circle")
const a=load.querySelector(".box h1")
const txt=a.querySelector("span")
const images=load.querySelector("img")









const imgs=["","images/mercury.png","images/venus.png","images/earth.png","images/moon.png","images/mars.png",
"images/jupiter.png","images/saturn.png","images/uranus.png","images/neptune.png","images/pluto.png"]
const solarValues=[0, 3.70, 8.87, 9.8, 1.62, 3.72, 24.79, 10.44, 8.87, 11.15, 0.62 ]


calculateBtn.addEventListener("click",()=>{
    let txtValue=txtInput.value
   /* if(!txtValue)
    {
        load.classList.add("MassError")
    }
    else return*/
    for(let i=0;i<selectedPlanets.length;i++)
    {
        if(selectedPlanets[0].selected && txtValue)
        {
            load.classList.add("PlanetError")
            load.classList.remove("result")
        }
        else if(selectedPlanets[0].selected && !txtValue)
            {
                load.classList.add("MassError")
            }
            else if(selectedPlanets[i].selected && !txtValue)
            {
                load.classList.add("MassError")
            }
            else if(selectedPlanets[i].selected && txtValue)
            {
                load.classList.add("result")
                load.classList.remove("PlanetError")
                load.classList.remove("MassError")
                console.log(selectedPlanets[i].value)
                let result=solarValues[i]*parseInt(txtValue)
                console.log(result)
                txt.innerText=`${selectedPlanets[i].value}`
                answers.innerHTML=`${result.toFixed(2)} N`
                images.src=imgs[i]
                


            }
            
        
    }
    /*let txtValue=txtInput.value
                                   
    if(selectedPlanets=="selectplanet")
    {
        
    }
    else return*/

   
})
txtInput.addEventListener("keyup",()=>{
    if(!txtInput.value)
    {
        load.classList.remove("PlanetError")
        load.classList.remove("result")
    }
})
