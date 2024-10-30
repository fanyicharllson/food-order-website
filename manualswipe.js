//=======================================================
// Function: Update main img when thumbnail is clicked
//======================================================
// function updateFoodOnClick(thumbImages) {
//   thumbImages.forEach((thumb, index) => {
//     thumb.addEventListener("click", () => {
//       mainImage.classList.add("image-transition");

//       thumbImages.forEach((img) => img.classList.remove("active"));
//       thumb.classList.add("active");

//       mainImage.src = thumb.src;

//       setTimeout(() => {
//         mainImage.classList.remove("image-transition");
//       }, 300);
//     });
//   });
// }

// Dynamically calculate the number of visible thumbnails based on screen width
// function getVisibleThumbnails() {
//   const screenWidth = window.innerWidth;
//   if (screenWidth <= 484) {
//     return 6; // 5 thumbnails visible on mobile
//   } else if (screenWidth <= 385 || screenWidth <= 390) {
//     return 4; // 3 thumbnails visible on tablets
//   } else {
//     return 5; // 5 thumbnails visible on desktop
//   }
// }

//=============================================
// Function: Updating the slider thumb position
//============================================
// function updateSliderPosition(imageCount, currentIndex) {
//   const maxVisible = getVisibleThumbnails();

//   const maxIndex = imageCount - maxVisible;
//   const offset = currentIndex * thumbWidth;

//   if (currentIndex < 0) currentIndex = 0;
//   if (currentIndex > maxIndex) currentIndex = maxIndex;

//   sliderImages.style.transform = `translateX(-${offset}px)`;

//   prevBtn.classList.toggle("hidden", currentIndex === 0);
//   nextBtn.classList.toggle("hidden", currentIndex === maxIndex);
// }

// // Initialize slider position
// updateSliderPosition();
// function nextBtnClick(imageCount) {
//   nextBtn.addEventListener("click", () => {
//     currentIndex++;
//     updateSliderPosition(imageCount, currentIndex);
//   });
// }
// function prevBtnClick(imageCount) {
//   prevBtn.addEventListener("click", () => {
//     currentIndex--;
//     updateSliderPosition(imageCount, currentIndex);
//   });
// }

//==================================
// Function: Displaying thumbnails
//==================================
// function displayThumbnails(data) {
//   let thumbnail = data.slice(0, data.length).map((item) => {
//     return `<img
//                   src=${item.img}
//                   alt="Food Image"
//                   class="thumb-img"
//                 />`;
//   });
//   thumbnail = thumbnail.join("");
//   document.querySelector(".slider-images").innerHTML = thumbnail;

//   const thumbImages = document.querySelectorAll(".thumb-img");
//   updateFoodOnClick(thumbImages);

//   const imageCount = thumbImages.length;

//   //Initialize slider on page load
//   updateSliderPosition(imageCount, currentIndex);

//   nextBtnClick(imageCount);
//   prevBtnClick(imageCount);
// }




//sass
/*Slider thumbnails sass*/
// .image-slider-detail {
//     color: $clr-secondary-anchor;
//     margin-top: 10px;
//     // @include Flex(center);
//     position: relative;
//     width: 100%;
//     .slider-wrapper-detail {
//         position: relative;
//         display: flex;
//         align-items: center;
//     }
    
//     .slider-images-container {
//         // width: 400px;
//         max-width: 400px;
//         margin: 0 auto; 
//         overflow: hidden;
//       }

//     .slider-images {
//         display: flex;
//         // overflow-x: auto;
//         gap: .3rem;
//         // overflow: hidden;
//         transition: transform 0.5s ease-in-out;
//         // width: calc(4 * 100px);


//         .thumb-img {
//             width: 90px;
//             height: 90px;
//             border-radius: 5px;
//             object-fit: cover;
//             cursor: pointer;
//             opacity: 0.7;


//             &.active {
//                 border: 2px solid $clr-accent-1; 
//                 opacity: 1;
//               }
//               &:hover {
//                 opacity: 0.7; 
//               }
//         }
//     }

//     .slider-arrow {
//         background-color: $clr-sidebar-hover-background;
//         color: $clr-secondary-anchor;
//         height: 30px;
//         width: 30px;
//         cursor: pointer;
//         border-radius: 50%;
//         position: absolute;
//         top: 50%;
//         transform: translateY(-50%);
//         z-index: 1;
//         @include Flex(center);
    
//         i {
//           font-size: 15px;
//         }
    
//         &:hover {
//           background-color: $clr-accent-hover-image;
//         }
    
//         &.left-arrow {
//           left: -20px;
//         }
    
//         &.right-arrow {
//           right: -20px;
//         }
//         &.hidden {
//             visibility: hidden;
//         }
//       }
// }



/*End of slider thumbnails in detail section*/

