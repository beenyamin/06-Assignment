

        const handleButton = async () => {

        const res = await fetch ("https://openapi.programming-hero.com/api/videos/categories")
        const data = await res.json ();
        console.log (data.data)

        const CreateBtnDiv = document.getElementById ('btn-container')
        const allData = data.data 
        allData.forEach( allCategory => {

        const div = document.createElement ('div')
        div.innerHTML = `<div onclick = " handleButton1()"> <input  class=" btn" type="radio" name="options" aria-label="${allCategory.category}" /> </div>`;
        CreateBtnDiv.appendChild (div) ;
            
        });


        }


  const handleButton1 = (buttonId) => {
    console.log (buttonId)
  }




        const handleButtonData =  async () => {
            const res = await fetch ("https://openapi.programming-hero.com/api/videos/category/1000")
            const data = await res.json ();
            console.log (data);
        }


        handleButton ();