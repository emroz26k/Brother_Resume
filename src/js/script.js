function bodyload(){
 
  homeLoad();
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

