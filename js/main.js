let step = 0;

const goToNextStep = () => {
  const holder = document.querySelector('.holder');

  if(step >= 2) {
    return holder.classList.toggle(`show-view-${step-1}`) 
  }
  
  holder.classList.toggle(`show-view-${step}`)

  step += 1;
  return holder.classList.toggle(`show-view-${step}`) 
}

const goToPreviousStep = () => {
    const holder = document.querySelector('.holder');
  
    if(step <= 1) {
      return holder.classList.toggle(`show-view-${step+1}`) 
    }
    
    holder.classList.toggle(`show-view-${step}`)
  
    step -= 1;
    return holder.classList.toggle(`show-view-${step}`) 
  }


document.addEventListener("DOMContentLoaded", (e) => {
  goToNextStep();
})
