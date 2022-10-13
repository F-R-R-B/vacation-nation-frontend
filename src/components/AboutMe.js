import { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <section class="mb-20 text-gray-700">
        <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
        

        <div class="grid md:grid-cols-2 gap-6 lg:gap-4 text-center">
          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://ca.slack-edge.com/T039KG69K-U03RU0PA197-69278705d921-512"
                class="rounded-full shadow-lg w-44"
                alt="Profile"
              />
            </div>
            <h5 class="text-xl font-semibold drop-shadow-lg mb-4">Julian Barker</h5>
            <h6 class="font-semibold text-orange-500 drop-shadow-lg mb-4">Software Developer</h6>
            <p class="font-semibold mb-4 drop-shadow-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic
              tenetur quae quaerat ad velit ab hic tenetur.
            </p>
          </div>
          <div class="mb-12 md:mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://ca.slack-edge.com/T039KG69K-U03SGGNHG9G-42742be8347c-512"
                class="rounded-full shadow-lg w-44"
                alt="Profile"
              />
            </div>
            <h5 class="text-xl font-semibold drop-shadow-lg mb-4">Joe Rutkin</h5>
            <h6 class="font-semibold text-orange-500 drop-shadow-lg mb-4">Software Developer</h6>
            <p class="font-semibold mb-4 drop-shadow-lg">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid commodi.
            </p>
            <ul class="flex justify-center mb-0">
            </ul>
          </div>
          <div class="mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://ca.slack-edge.com/T039KG69K-U03QGUVMPTP-42df03c8de05-512"
                class="rounded-full shadow-lg w-44"
                alt="Profile"
              />
            </div>
            <h5 class="text-xl font-semibold drop-shadow-lg mb-4">Ian Forrester</h5>
            <h6 class="font-semibold text-orange-500 drop-shadow-lg mb-4">Software Developer</h6>
            <p class="font-semibold mb-4 drop-shadow-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
        
        <div class="mb-0">
            <div class="flex justify-center mb-6">
              <img
                src="https://ca.slack-edge.com/T039KG69K-U03QNAJSU20-43ca375becb1-512"
                class="rounded-full shadow-lg w-44"
                alt="Profile"
              />
            </div>
            <h5 class="text-xl font-semibold drop-shadow-lg mb-4">Mathieu Roberts</h5>
            <h6 class="font-semibold text-orange-500 drop-shadow-lg mb-4">Software Developer</h6>
            <p class="font-semibold mb-4 drop-shadow-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
              praesentium voluptatum deleniti atque corrupti.
            </p>
          </div>
          </div>
          </div>
      </section>
    );
  }
}

export default AboutMe;