function bodyload() {

    homeLoad();
    profileLoad();
    education_and_skills();
    experience();
    projects();
    certificate_learning();
}

function homeLoad() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {

            let profileImg = document.getElementById("profileImg");
            profileImg.src = object.profile.thumbnail;

            document.getElementById("name").innerHTML = `
      <span class=" fs-1 fw-bold">${object.profile.name} </span>
      `;

            document.getElementById("homeCardBody").innerHTML = `
      <div class="text-capitalize ">${object.profile.location}</div>
      <div class=" text-capitalize ">*pharmaceutical industry | qC | qA | r&D*</div>
      `;
            document.getElementById("homeCardFooter").innerHTML = `
        <a href="/resume/afroz/" class="btn btn-primary p-1 text-capitalize">[ download resume ]</a>
        <a href="#contact" class="btn btn-primary p-1 text-capitalize">[ contact me ]</a>

      `;

        })
}
function profileLoad() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            let div = document.createElement("div");
            div.innerHTML = `
        <h3>profile</h3>
        <span class="fs-3 fw-bold text-uppercase">summary</span>
        <p>${object.profile.summary}</p>


        `;
            document.getElementById("profile").appendChild(div);
        })

}
function education_and_skills() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {

            let div = document.createElement("div");
            div.innerHTML = `
        <div class="row">
            <div class="col-6 border border-1 rounded-1 ">
             <h3 class=" text-capitalize">education</h3>
             <ul id="educationList" class="list-unstyled" > 
            
             </ul>
            </div>
            <div class="col-6 border border-1 rounded-1 ">
              <h3 class=" text-capitalize">technical skills</h3> 
            
                <li class="list-unstyled">
                  
                    <ul class="list-unstyled" id="analyticalTechniquesList"></ul>
                </li>
                <li class="list-unstyled">
                 
                    <ul class="list-unstyled" id="laboratoryList"></ul>
                </li>
                 <li class="list-unstyled">
               
                    <ul class="list-unstyled" id="qualityList"></ul>
                </li>
                 <li class="list-unstyled">
                  
                    <ul class="list-unstyled" id="documentationList"></ul>
                </li>
                 <li class="list-unstyled">
                  
                    <ul class="list-unstyled" id="regulatoryList"></ul>
                </li>

                 <li class="list-unstyled">
           
                    <ul class="list-unstyled" id="pharmaceuticalList"></ul>
                </li>
                 <li class="list-unstyled">

                    <ul class="list-unstyled" id="clinicalList"></ul>
                </li>
                 <li class="list-unstyled">
                 
                    <ul class="list-unstyled" id="softwareList"></ul>
                </li>
                
            </div>
        
        </div>
        `;
            document.getElementById("education").appendChild(div);

            object.education.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data.period}<br>
         ${data.degree}<br>
         ${data.institution}<br>
         ${data.result}<br>
         <br>`;
                document.getElementById("educationList").appendChild(li);
            });
            object.technicalSkills.analyticalTechniques.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("analyticalTechniquesList").appendChild(li);

            });
            object.technicalSkills.laboratory.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("laboratoryList").appendChild(li);

            });
            object.technicalSkills.quality.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("qualityList").appendChild(li);

            });
            object.technicalSkills.documentation.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("documentationList").appendChild(li);

            });
            object.technicalSkills.regulatory.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("regulatoryList").appendChild(li);

            });
            object.technicalSkills.pharmaceutical.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("pharmaceuticalList").appendChild(li);

            });
            object.technicalSkills.clinical.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("clinicalList").appendChild(li);


            });
            object.technicalSkills.software.map(function (data) {

                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("softwareList").appendChild(li);


            });

        });

}

function experience() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            data.industrialExperience.map(function (items) {
                let div = document.createElement("div");
                div.innerHTML = `
        <h3>${items.title}</h3>
        <div class=" border border-1 rounded-2 p-2 ">
        <h3>${items.company}</h3>
        <b>${items.location}</b>
        <div>${items.position}</div>

        <div>${items.duration}</div>
         <img id="image" class="border border-1 rounded rounded-2 border-primary " src="${items.thumbnail}" style="width:100px; height:100px;">
         <p>${items.description}</p>

        
        `;

                document.getElementById("experience").appendChild(div);

            })
        })

}

function projects() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();

        })
        .then(function (items) {
            let div = document.createElement("div");
            div.innerHTML = `
        <h3>Project</h3>
        <div class="border border-1 rounded rounded-2 border-primary p-2">
         <h3>${items.project.title}</h3>
         <div class=" d-flex flex-row justify-content-center gap-2 ">
         <img src="${items.project.thumbnail}">
         
          <ul id="features">

          </ul>
         </div>
         
         <span id="tool">
         </span>

        </div>

         
        
        `;
            document.getElementById("projects").appendChild(div);
            items.project.description.map(function (data) {
                let li = document.createElement("li");
                li.innerHTML = `${data}`;
                document.getElementById("features").appendChild(li);

            })

            items.project.tools.map(function (Tool) {
                let anchor = document.createElement("a");
                anchor.innerHTML = `
            [${Tool}]
            `;
                document.getElementById("tool").appendChild(anchor);

            })


        })

}

function certificate_learning() {
    fetch("/api/resume.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
       
                let div = document.createElement("div");
                div.innerHTML = `
                    <h3>certifications & professional learning</h3>
              
                    <div class=" border border-1 rounded-2 border-primary ">

                        <div class="row" id="certificateRows">

                        </div>       
                    </div>           
             `;

                document.getElementById("certification").appendChild(div);
              data.certifications.map(function(item){
           let div= document.createElement("div");
           div.innerHTML=`
            <div class="col-4">
                <h2>${item.name}</h2>
                <span>
                    <img class="border border-1 rounded rounded-2 w-25 h-25 border-primary" src="${item.thumbnail}">

                </span>
                <b>${item.organization}</b>
            </div>                                    
             `;
            
             document.getElementById("certificateRows").appendChild(div);
        })
                

           
        })
       
}
