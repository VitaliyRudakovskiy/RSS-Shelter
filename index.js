import pets from "./petsInfo.js";

const getToKnowTheRestButton = document.querySelector('.pets__button');
const startButton = document.querySelector('.start__button');

getToKnowTheRestButton.onclick = function() {
    window.location.href = 'pets.html';
}

startButton.onclick = function() {
    window.location.href = '#our-friends';
}

let newPets = pets.slice(randomIndex).concat(pets.slice(0, randomIndex));
const sliderLeft = document.querySelector('.slider__left');
const sliderRight = document.querySelector('.slider__right');

// newPets.forEach((pet_info) => {
//     const pet_card = document.createElement("div");
//     pet_card.className = "pet_card_item";
//     pet_cards.appendChild(pet_card);

//     const pet_img = document.createElement("img");
//     pet_img.className = "pet_img";
//     pet_img.src = pet_info.img;
//     pet_card.appendChild(pet_img);

//     const pet_name = document.createElement("h4");
//     pet_name.textContent = pet_info.name;
//     pet_card.appendChild(pet_name);

//     const button = document.createElement("button");
//     button.textContent = "Learn more";
//     pet_card.appendChild(button);

//     pet_card.addEventListener("click", () => {
//       document.body.classList.add("lock");

//       const pop_up = document.createElement("div");
//       pop_up.className = "pop-up";
//       document.body.appendChild(pop_up);

//       const close_div = document.createElement("div");
//       close_div.className = "close-btn";
//       const close_btn = document.createElement("button");
//       close_div.appendChild(close_btn);
//       pop_up.appendChild(close_div);

//       const popUpContent = document.createElement("div");
//       popUpContent.className = "pop-up_content";
//       pop_up.appendChild(popUpContent);

//       const popUpImg = document.createElement("div");
//       popUpImg.className = "pop-up_img";
//       const ImgPopUpImg = document.createElement("img");
//       ImgPopUpImg.src = pet_info.img;
//       popUpImg.appendChild(ImgPopUpImg);
//       popUpContent.appendChild(popUpImg);

//       const popUpPetInfo = document.createElement("div");
//       popUpPetInfo.className = "pop-up_pet_info";
//       popUpContent.appendChild(popUpPetInfo);

//       const pet_name = document.createElement("h3");
//       pet_name.textContent = pet_info.name;
//       popUpPetInfo.appendChild(pet_name);

//       const pet_type = document.createElement("h4");
//       pet_type.textContent = `${pet_info.type} - ${pet_info.breed}`;
//       popUpPetInfo.appendChild(pet_type);

//       const pet_descr = document.createElement("p");
//       pet_descr.textContent = pet_info.description;
//       popUpPetInfo.appendChild(pet_descr);

//       const ul = document.createElement("ul");
//       popUpPetInfo.appendChild(ul);

//       const li1 = document.createElement("li");
//       li1.className = "li_item";
//       li1.innerHTML = `<strong>Age:</strong>&nbsp ${pet_info.age}`;
//       ul.appendChild(li1);

//       const li2 = document.createElement("li");
//       li2.className = "li_item";
//       li2.innerHTML = `<strong>Inoculations:</strong>&nbsp ${pet_info.inoculations}`;
//       ul.appendChild(li2);

//       const li3 = document.createElement("li");
//       li3.className = "li_item";
//       li3.innerHTML = `<strong>Diseases:</strong>&nbsp ${pet_info.diseases}`;
//       ul.appendChild(li3);

//       const li4 = document.createElement("li");
//       li4.className = "li_item";
//       li4.innerHTML = `<strong>Parasites:</strong>&nbsp ${pet_info.parasites}`;
//       ul.appendChild(li4);
//       popUpContent.addEventListener("mouseleave", () => {
//         pop_up.style.cursor = "pointer";
//         close_btn.classList.add("hover");
//       });

//       popUpContent.addEventListener("mouseenter", () => {
//         pop_up.style.cursor = "default";
//         close_btn.classList.remove("hover");
//       });

//       pop_up.addEventListener("click", () => {
//         if (!popUpContent.contains(event.target)) {
//           document.body.classList.remove("lock");
//           pop_up.remove();
//         }
//       });
//       document.addEventListener("mouseleave", () => {
//         close_btn.classList.remove("hover");
//       });

//       document.addEventListener("mouseenter", () => {
//         close_btn.classList.add("hover");
//       });
//     });
// });