function bodyload(){
 
  homeLoad();
  profileLoad();
  education_and_skills();
}

function homeLoad(){
    fetch("/api/resume.json")
    .then(function(response){
        return response.json();
    })
    .then(function(object){
      
      let profileImg=document.getElementById("profileImg");
      profileImg.src=object.profile.thumbnail;

      document.getElementById("name").innerHTML=`
      <span class=" fs-1 fw-bold">${object.profile.name} </span>
      `;

      document.getElementById("homeCardBody").innerHTML=`
      <div class="text-capitalize ">${object.profile.location}</div>
      <div class=" text-capitalize ">*pharmaceutical industry | qC | qA | r&D*</div>
      `;
      document.getElementById("homeCardFooter").innerHTML=`
        <a href="/resume/afroz/" class="btn btn-primary p-1 text-capitalize">[ download resume ]</a>
        <a href="#contact" class="btn btn-primary p-1 text-capitalize">[ contact me ]</a>

      `;
    
    })
}
   function profileLoad(){
    fetch("/api/resume.json")
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        let div=document.createElement("div");
        div.innerHTML=`
        <h3>profile</h3>
        <span class="fs-3 fw-bold text-uppercase">summary</span>
        <p>${object.profile.summary}</p>


        `;
        document.getElementById("profile").appendChild(div);
    })

   } 
   function education_and_skills(){
    fetch("/api/resume.json")
    .then(function(response){
        return response.json();
    })
    .then(function(object){
           
        let div= document.createElement("div");
        div.innerHTML=`
        <div class="row">
            <div class="col-6">
             <h3 class=" text-capitalize">education</h3>
             <ul id="educationList" class="list-unstyled" >
            
             </ul>
            </div>
            <div class="col-6">
              <h3 class=" text-capitalize">technical skills</h3> 
              let 
              

            </div>
        
        </div>
        `;
        document.getElementById("education").appendChild(div);

         object.education.map(function(data){ 
         let li=document.createElement("li");
         li.innerHTML=`${data.period}<br>
         ${data.degree}<br>
         ${data.institution}<br>
         ${data.result}<br>
         <br>`;
         document.getElementById("educationList").appendChild(li);         
        
    });

              
        
    });
   
   }

