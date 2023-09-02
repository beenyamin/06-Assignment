
// step= 01

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


// ========>

    const handleButtonData = async (categoryId = ('1000')) => {
      const  res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
      const data = await res.json();
      const mainData = data.data;
      showAllData(mainData)
        
      const buttonBlog = document.getElementById('button-Blog');
      buttonBlog.innerHTML = ""

    }  

    const showAllData = (mainData) => {


      const videoContainer = document.getElementById('Videos-container')
      const emptyError = document.getElementById('Error-container')
      emptyError.innerHTML = ""
      const emptyErrorDiv = document.createElement('div')
      emptyErrorDiv.innerHTML =`       
      <div class=" justify-center mt-10 ">
      <div class="flex justify-center">
          <img src="./images/Icon.png" alt="">
      </div>
      <p class="text-3xl font-bold text-center mt-5"> Oops!! Sorry, </br> There is no content here</p>
    </div>
      `

      if(mainData >= false ){
          emptyError.classList.remove('hidden');

      }
      else{

          emptyError.classList.add('hidden');
      }

      emptyError.appendChild(emptyErrorDiv)

      videoContainer.innerHTML = ""
      mainData.forEach(allVideos => {
      const fourCardData = document.createElement('div')


      fourCardData.innerHTML =`

      <div class="box">
    <img class="box-img w-56 h-40 rounded-lg" src="${allVideos?.thumbnail}" alt="" />
    <div class="box-info p-2">

    <div class="flex">

    <img class="bg-gray-900 w-8 h-8 rounded-full" src="${allVideos?.authors[0]?.profile_picture}" alt="">
    <h5 class="text-xl font-medium pl-2"> ${allVideos?.title} </h5>
    </div>


    <div class="flex"> <p class="pl-10 font-normal"> ${allVideos?.authors[0]?.profile_name} </p> 
    
        <img class=" w-6 h-6 " src=" ${allVideos?.authors[0]?.verified ? `./images/verify.png` : ''}" alt="">
    </div>
    <p class="pl-10 font-normal ">${allVideos?.others?.views}<span> Views </span> </p> 

    </div>

    </div>
          `
          videoContainer.appendChild(fourCardData)


      })
    }


            handleButton ();
            handleButtonData () ; 



            const handleButtonClick  = () => { 

              const videoContainer = document.getElementById('Videos-container')
              videoContainer.innerHTML = ""
          
              const emptyError = document.getElementById('Error-container')
              emptyError.classList.add('hidden');
          
              const buttonBlog = document.getElementById('button-Blog');
              const blogCard = document.createElement('div');
              buttonBlog.innerHTML = ""
              blogCard.innerHTML =`
          
              <div class="collapse collapse-arrow bg-base-200">
              <input type="radio" name="my-accordion-2" checked="checked" /> 
              <div class="collapse-title text-3xl font-bold">
               Question 1. Discuss The Scope of Var, let, & Const
              </div>
              <div class="collapse-content"> 
                <p class=" text-xl font-medium"> <Span class="text-xl font-bold" > ANSWER : </Span> Var, let, and const are three keywords used for declaring variables in JavaScript, <br> and they have different scopes and behaviors. Understanding their scopes is <br> essential for writing reliable and bug-free JavaScript code. <br>
                  the scope of var is function or global, let and const are block-scoped, <br> and let and const are preferred over var in modern JavaScript due to <br> their more predictable scoping behavior. const should be used for values <br> that should not be reassigned, while let can be used when reassignment <br> is necessary within a block scope.
                </p>
              </div>
            </div>
            <div class="collapse collapse-arrow mt-5 bg-base-200">
              <input type="radio" name="my-accordion-2" /> 
              <div class="collapse-title text-3xl font-bold ">
                Question 2.Tell Us The Use Cases Of Null & Undefined
              </div>
              <div class="collapse-content"> 
                <p class=" text-xl font-medium">
                <Span class="text-xl font-bold" > ANSWER : </Span> "Null" and "Undefined" are two distinct values in JavaScript, <br> 
                   and they have specific use cases. <br>  "Undefined" typically represents an unintentional absence or lack of value, often resulting <br> from uninitialized variables or missing function arguments, while <br> null is used to explicitly indicate the intentional absence of an <br> object or value, or to reset a reference that previously held a value. <br> Both are useful in different contexts, so understanding their distinctions <br> is important when working with JavaScript. </p>
              </div>
            </div>
            <div class="collapse collapse-arrow mt-5 bg-base-200">
              <input type="radio" name="my-accordion-2" /> 
              <div class="collapse-title text-3xl font-bold">
                Question 3. What Do You Mean By REST API?
              </div>
              <div class="collapse-content"> 
                <p class="text-xl font-medium"> <Span class="text-xl font-bold" > ANSWER : </Span>   REST API, which stands for Representational State Transfer Application Programming Interface, <br> is an architectural style for designing networked applications. <br> It is not a protocol but a set of constraints or principles for building <br> web services that are scalable, stateless, and easy to maintain </p>
              </div>
            </div>
    
              `
              buttonBlog.appendChild(blogCard)
            
          }




              // step=02

//         const handleButtonData = async(buttonId = ('1000')) => {
//        const response = await fetch (`https://openapi.programming-hero.com/api/videos/category/${buttonId}`)

//        const data1 = await response.json ();

//      const videosContainer =document.getElementById ('Videos-container')
//     data1.data.forEach(allVideos => {

//    const div = document.createElement ('div');
//    div.innerHTML = `<div class="box">
//    <img class="box-img w-56 h-40 rounded-lg" src="${allVideos?.thumbnail}" alt="" />
//    <div class="box-info p-2">

//   <div class="flex">

//    <img class="bg-gray-900 w-8 h-8 rounded-full" src="${allVideos?.authors[0]?.profile_picture}" alt="">
//    <h5 class="text-xl font-medium pl-2"> ${allVideos?.title} </h5>
//   </div>


//    <div class="flex"> <p class="pl-10 font-normal"> ${allVideos?.authors[0]?.profile_name} </p> 
   
//        <img class=" w-6 h-6 " src="./images/verify.png " alt="">
//    </div>
//   <p class="pl-10 font-normal ">${allVideos?.others?.views}<span> Views </span> </p> 

//  </div>

//  </div>`;

//  videosContainer.appendChild (div) ;


//        });
      
//          }
