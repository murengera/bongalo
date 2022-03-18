<template>
  <div class="container">
    <div class="col-md-6 h-75 d-inline-block">
   

      <div class="progress">
        <div id="prBar" class="progress-bar" style="width: 24%"></div>
      </div>

      <!--form  -->

      <form action="" id="stepper-form" class="was-validated" @submit.prevent="submit">
        <!--section1 -->

        <section id="step-1">
          <!-- title -->

          <h3 class="h3 text-left">Let's get started Listing your space</h3>

          <h3 class="h3 text-uppercase text-left">STEp 1</h3>

          <p class="h3 text-left">Let's get started Listing your space</p>

          <!-- title -->

          <!-- formgroup-->

          <div class="form-group">
            <select class="selectpicker" id="script">
              <option title="Private room">Private room</option>
            </select>

            <br />

            <br />

            <select class="selectpicker" id="guest">
              <option title="For 10  guest">For 10 guest</option>
            </select>

            <br />
            <br />

            <input
              type="text"
              name=""
              id="form-fname"
              class="form-control"
              required
              placeholder="Kigali,Rwanda"
            />
          </div>
        </section>

        <!--section1 -->

        <section id="step-2">
          <!-- title -->
          <!-- title -->
          <br />
          <br />

          <h3 class="h2 text-left">How many guests can your</h3>
          <h3 class="h2 text-left">place accomodate?</h3>

          <p class="h6 text-left">Check that you have enough beds to</p>
          <p class="h6 text-left">accommodate all your guests comfortably</p>

          <br />
          <br />
          <div class="row">
            <p class="h6">Guests</p>

            <button type="button" class="btn btn-light btn-circle btn-sm">
              <p class="h6" style="font-size: 8px">-</p>
            </button>
            <p class="h6 text-left">10</p>
            <button type="button" class="btn btn-light btn-circle btn-sm">
              <p class="h6" style="font-size: 8px">+</p>
            </button>
          </div>

          <br />
          <p class="h5 text-left">How many bedrooms can guests use?</p>

          <div class="form-group">
            <select class="selectpicker">
              <option title="Studion">studion</option>
            </select>
          </div>

          <br />
          <p class="h5 text-left">How many beds can guests use?</p>
          <div class="row">
            <p class="h6">Beds</p>

            <button type="button" class="btn btn-light btn-circle btn-sm">
              <p class="h6" style="font-size: 8px">-</p>
            </button>
            <p class="h6 text-left">1</p>
            <button type="button" class="btn btn-light btn-circle btn-sm">
              <p class="h6" style="font-size: 8px">+</p>
            </button>
          </div>
          <br />
          <br />

          <p class="h3 text-left">Sleeping arrangements?</p>
          <p class="h6 text-left">
            Sharing the types of beds in each room can help
          </p>
          <p class="h6 text-left">
            people understand the sleeping arrangements.
          </p>
        </section>
        <br /><br />

        <section id="step-3">
          <h2 class="h2 text-left">Where's your place located?</h2>

          <p class="h6 text-left">
            Guests will only get your exact address once
          </p>
          <p class="h6 text-left">they've booked a reservation</p>
          <br />

          <button type="button" class="btn btn-light btn-lg btn-block">
            Use current location
          </button>
          <br />
          <p class="h6 text-center">or enter your address</p>
          <hr />

          <p class="h6 text-left">Country/Region</p>

          <div class="form-group">
            <select class="selectpicker">
              <option title="Rwanda">Rwanda</option>
              <option title="Congo">Congo</option>
            </select>
          </div>

          <p class="h6 text-left">Street address</p>

          <input
            type="text"
            name=""
            id="form-address"
            class="form-control"
            required
            placeholder="House,name/number +street/road"
          />

          <br />
          <p class="h6 text-left">Apt,Swuite.(optional)</p>

          <input
            type="text"
            name=""
            id="form-address"
            class="form-control"
            required
            placeholder="Apt,suite,building access code"
          />
        </section>
        <br>
        <br>

        <section id="step-4">
          <!-- title -->
          <h2 class="h2 text-left">What amenities do you offer?</h2>

          <p class="h6 text-left">
            These are just the amenities guests usually
          </p>
          <p class="h6 text-left">
            expect,but you can add even more after you publish.
          </p>
          <br />
          <br />
          <br />

          <p class="h6 text-left">Essentials</p>
          <br />

          <div class="row">
            <p>Towels,bed sheets,soap,toilet paper,and <br />pillows</p>

            <button
              type="button "
              id="pillow"
              class="btn btn-light btn-circle btn-sm"
            ></button>
          </div>
          <hr />

          <div class="row">
            <p>Wifi</p>
            <button
              type="button"
              id="wifi"
              class="btn btn-light btn-circle btn-sm"
            ></button>
          </div>
          <hr />

          <div class="row">
            <p>TV</p>
            <button
              type="button"
              id="tv"
              class="btn btn-light btn-circle btn-sm"
            ></button>
          </div>
          <hr />

          <div class="row">
            <p>Heat</p>
            <button
              type="button"
              id="heat"
              class="btn btn-light btn-circle btn-sm"
            ></button>
          </div>
        </section>


  <div class="row">
  <button class="btn btn-primary man" id="back">back</button>

        <button class="btn btn-primary man" id="next"> <i class="bi bi-arrow-down-short"></i>  Continue</button>
  </div>
        
      </form>

      <!--form  -->
    </div>
  </div>
</template>

<script>
export default {

  mounted() {
    var step1 = document.getElementById("step-1");
    var step2 = document.getElementById("step-2");
    var step3 = document.getElementById("step-3");
    var step4 = document.getElementById("step-4");
    step1.style.display = "block";
    step2.style.display = "none";
    step3.style.display = "none";
    step4.style.display = "none";

    //get input values
    var fname = document.getElementById("form-fname");
    var optionvalue = document.getElementById("script");
    var guestValue = document.getElementById("guest");

    //next

    //get formS
    var form = document
      .getElementById("stepper-form")
      .addEventListener("click", (e) => {
        e.preventDefault();
      });
    //progress bar

    var progress = document.getElementById("prBar");
 

    //next
    var next = document.getElementById("next");
    next.addEventListener("click", () => {
      if (
        
        step1.style.display === "block" &&
        step2.style.display == "none" &&
        step3.style.display == "none" &&
        step4.style.display == "none"
      ) {
        progress.style.background = "#013220";
        progress.style.width = "50%";
       
        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        step4.style.display = "none";
      } else if (
        step2.style.display === "block" &&
        step1.style.display == "none" &&
        step3.style.display == "none" &&
        step4.style.display == "none"
      ) {
        
        progress.style.width = "70%";
         progress.style.background = "#013220";
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        step4.style.display = "none";
      } else if (
        step3.style.display === "block" &&
        step1.style.display == "none" &&
        step2.style.display == "none" &&
        step4.style.display == "none"
      ) {
        
        progress.style.width = "100%";
          progress.style.background = "#013220";
   
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "block";
      }
    });
    var back = document.getElementById("back");
    back.addEventListener("click", () => {
      if (
        step4.style.display == "block" &&
        step3.style.display == "none" &&
        step2.style.display == "none" &&
        step1.style.display == "none"
      ) {
        
        progress.style.width = "70%";
     
        step1.style.display = "none";
        step2.style.display = "none";
        step3.style.display = "block";
        step4.style.display = "none";
      } else if (
        step3.style.display == "block" &&
        step4.style.display == "none" &&
        step2.style.display == "none" &&
        step1.style.display == "none"
      ) {
      
        progress.style.width = "50%";

        step1.style.display = "none";
        step2.style.display = "block";
        step3.style.display = "none";
        step4.style.display = "none";
      } else if (
        step2.style.display == "block" &&
        step4.style.display == "none" &&
        step3.style.display == "none" &&
        step1.style.display == "none"
      ) {
      
        progress.style.width = "25%";
       
        step1.style.display = "block";
        step2.style.display = "none";
        step3.style.display = "none";
        step4.style.display = "none";
      }
    });
  },
  
};
</script>

<style lang="css" scoped>
select,
option {
  width: 300px;
  padding: 10px;
}
#form-address {
  width: 300px;
}
#form-fname{

 width: 300px;
}

#stepper-form {
  width: 100%;
  padding-left: 10px;
  transition: all 0.3s;
}

.btn-circle.btn-sm {
  width: 20px;

  height: 20px;

  padding: 6px 0px;

  border-radius: 15px;
  border: 1px solid green;

  font-size: 8px;

  text-align: center;
  margin: 0px 0px 0px 10px
}

.row {
  margin: 0px 0px 0px 5px;
}
.btn-block {
  border-radius: 5px;
  border: 1px solid green;
  width: 300px;
}

#pillow {
  margin: 20px 5px 50px 150px;
}
#wifi {
  margin: 0px 5px 50px 405px;
}
#tv {
  margin: 0px 5px 50px 405px;
}
#heat {
  margin: 0px 5px 50px 405px;
}

.container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:20px 0px 10px 200px ;
    
   
}
.man{
   margin-right: 120px;
  margin-left: 15px;
  background-color:#013220
}

</style>
