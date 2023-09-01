
data1.data?.forEach ( (Videos) => {
    const div = document.createElement ('div')
    div.innerHTML = `<div class="card w-56 h-72 border-2 rounded-lg  ">
    <figure><img src=" ${Videos?.thumbnail} " alt="Shoes" /></figure>

     <div class="card-body">   
     <h2 class="card-title text-xl font-semibold"> ${Videos?.title} </h2>
      <p class = ""> ${Videos?.authors?.profile_name}</p> 
       <img src="${Videos?.authors?.profile_picture}"alt="">
      
    </div>
  </div>`;

  videosContainer.appendChild (div);
       
     });


     ------->

     const handleButtonData = async (buttonId) => {
      const res = await fetch (`https://openapi.programming-hero.com/api/videos/category/${buttonId}`)
              const data1 = await res.json ();
            const videosContainer = document.getElementById ('Videos-container') ; 
              data1.data.forEach ( (Videos) => {
             const div = document.createElement ('div')
             div.innerHTML = `<div class="card w-56 h-72 border-2 rounded-lg  ">
             <figure><img src=" ${Videos?.thumbnail} " alt="Shoes" /></figure>
  
              <div class="card-body">   
              <h2 class="card-title text-xl font-semibold">  </h2>
               <p class = ""> ${Videos?.authors[0,1].profile_name}</p> 
                <img src="${Videos?.authors?.profile_picture}"alt="">
               
             </div>
           </div>`;
  
           videosContainer.appendChild (div);
                
              });

            }


            ------->

            allData.forEach( (allCategory) => {
               const div = document.createElement ('div')
               div.innerHTML = `
               <input onClick = "handleButtonData( '${allCategory.category_id}')"  class="btn" type="radio" name="options" aria-label="${allCategory.category}" /> `;
       
               CreateBtnDiv.appendChild (div) ;
                   
               });