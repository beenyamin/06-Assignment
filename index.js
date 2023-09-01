

        const handleButton = async () => {

        const res = await fetch ("https://openapi.programming-hero.com/api/videos/categories") ;
        const data = await res.json ();
      
        const buttonContainer = document.getElementById ('button-container');
        data.data.forEach( (buttonCategory) => {
          const div = document.createElement ('div') ;


          div.innerHTML = `<input onclick = "handleButtonData ( '${buttonCategory.category_id}') " class=" btn" type="radio" name="options" aria-label="${buttonCategory.category}" />`;
          buttonContainer.appendChild (div);
          
        });

        console.log (data.data)

        }



        const handleButtonData = async(buttonId) => {

       const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${buttonId}`)
         
       const data1 = await response.json ();


     const videosContainer =document.getElementById ('Videos-container')
    data1.data.forEach(allVideos => {

   const div = document.createElement ('div');
   div.innerHTML = `<div class="card w-56 h-64 border-2 rounded-lg ">
   <figure><img src="${allVideos.thumbnail}" alt="Shoes" /></figure>
   <div class="card-body">
   <div class="flex">

       <img class=" rounded-full w-8  h-8 " src="${allVideos.authors [0].profile_picture }" 
       alt=""
       <p class="font-semibold pl-8 ">${allVideos.title} </p> 
       </div>
       <p class=""> ${allVideos.authors[0].profile_name}</p> 
       
        
   </div>
 </div> `

 videosContainer.appendChild (div) ;


       });
      
         }

 

        handleButton ();
        // // handleButtonData () ;