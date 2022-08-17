

  let sec1 = "";
  let sec2 = "";
  let sec3 = "";
  let sec4 = "";
  let sec5 = "";
  
const SEC1 = document.querySelector(".Sec1");
const SEC2 = document.querySelector(".Sec2");

const SEC3 = document.querySelector(".Sec3");
const SEC4 = document.querySelector(".Sec4");
const SEC5 = document.querySelector(".Sec5");

const load = async () => {
  const res = await fetch("http://localhost:3000/courses");
  let courses = await res.json();
  courses.forEach((course) => {
    sec1 += `
    <div class="flex-container all">
         <div><img alt="" width="240" height="135"  src="${course.image}" ></div>   
      </div>`;
    sec2+=`
    <div class="flex-Text all">
        <div>${course.title}</div>
      </div>`;
    sec3+=`
      <div class="flex-Tech all">
        <div>${course.title}</div>
      </div>`;
    sec4+=`
    <div class="flex-star all">
        <div class="checked">${course.rate}<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star fa-star-half-full" id="last"></span></div>
      </div>`;
    sec5+=`
      <div class="flex-price all">
        <div>${course.price}/div>
      </div> `;
  });

  SEC1.innerHTML = sec1;
  SEC2.innerHTML = sec2;
  SEC3.innerHTML = sec3;
  SEC4.innerHTML = sec4;
  SEC5.innerHTML = sec5;
};

load();
const inputText= document.getElementById("input_bar");
inputText.addEventListener("input", async (e) => { 
  let tex = e.target.value;
  if (tex && tex.trim().length > 0) {tex = tex.trim().toLowerCase();}
  const res = await fetch("http://localhost:3000/courses");
  let courses = await res.json();
  let searched = courses.filter((course) => course.title.trim().toLowerCase().includes(searchValue)
  );

  sec1 = "";
  sec2 = "";
  sec3 = "";
  sec4 = "";
  sec5 = "";


  searched.forEach((course) => {
    sec1 += `
    <div class="flex-container all">
         <div><img alt="" width="240" height="135"  src="${course.image}" ></div>   
      </div>`;
    sec2+=`
    <div class="flex-Text all">
        <div>${course.title}</div>
      </div>`;
    sec3+=`
      <div class="flex-Tech all">
        <div>${course.title}</div>
      </div>`;
    sec4+=`
      <div class="flex-star all">
        <div class="checked">${course.rate}<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star fa-star-half-full" id="last"></span></div>
      </div>`;
    sec5+=`
      <div class="flex-price all">
        <div>${course.price}/div>
      </div> `;
  });

  const searchButton = document.querySelector(".submit");

  searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    // let parent  = document.getElementById("1");
    // //parent.innerHTML = " ";
    // console.log(parent);
    // parent.removeChild(parent.firstElementChild);
    // parent.removeChild(parent.firstElementChild);
    // parent.removeChild(parent.firstElementChild);
    // parent.removeChild(parent.firstElementChild);
    // parent.removeChild(parent.firstElementChild);
    //parent.innerHTML = " ";
    // SEC2.innerHTML = " ";
    // SEC3.innerHTML = " ";
    // SEC4.innerHTML = " ";
    // SEC5.innerHTML = " ";

    SEC1.innerHTML = sec1;
    SEC2.innerHTML = sec2;
    SEC3.innerHTML = sec3;
    SEC4.innerHTML = sec4;
    SEC5.innerHTML = sec5;
  });
});
