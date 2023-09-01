
// step=01
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

          

        // step=02

        const handleButtonData = async(buttonId) => {

       const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${buttonId}`)
         
       const data1 = await response.json ();

     const videosContainer =document.getElementById ('Videos-container')
    data1.data.forEach(allVideos => {

   const div = document.createElement ('div');
   div.innerHTML = `<div class="box">
   <img class="box-img w-56 h-40 rounded-lg" src="${allVideos?.thumbnail}" alt="" />
<div class="box-info p-2">

  <div class="flex">

   <img class="bg-gray-900 w-8 h-8 rounded-full" src="${allVideos?.authors[0]?.profile_picture}" alt="">
   <h5 class="text-xl font-medium pl-2"> ${allVideos?.title} </h5>
  </div>


   <div class="flex"> <p class="pl-10 font-normal"> ${allVideos?.authors[0]?.profile_name} </p> 
   
       <img class=" w-6 h-6 " src="./images/verify.png " alt="">
   </div>
  <p class="pl-10 font-normal ">${allVideos?.others?.views}<span> Views </span> </p> 

 </div>

 </div>`;

 videosContainer.appendChild (div) ;


       });
      
         }


        handleButton ();
        // // handleButtonData () ; 