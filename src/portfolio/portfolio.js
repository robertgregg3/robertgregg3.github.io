/*  Adding a new portfolio item:
    1) add the css, js etc pages.
    2) add the images 
    3) add item to portfolioItemData
*/
/*  Adding a new portfolio skill:
    1) add skill to portfolioCategoryData
    2) add a new skill number to both sections of addPortfolioItem
*/

// portfolioCategoryData
const portfolioCategoryData = [
  "all",
  "api",
  "back-end",
  "big-data",
  "bootstrap",
  "css3",
  "data-vis",
  "front-end",
  "firebase",
  "html",
  "javascript",
  "material-ui",
  "mongodb",
  "nodejs",
  "react",
  "redux",
  "typescript",
  "uiux",
  "websites",
];

// portfolio Item
const portfolioItemData = [
  {
    title: "data-vis",
    skill1: "back-end",
    skill2: "front-end",
    skill3: "data-vis",
    skill5: "javascript",
    skill6: "react",
    skill7: "firebase",
    skill9: "api",
    skill10: "big-data",
    details:
      "This showcases some basic Data visualisation skills using D3 charting library. Created in 2021. Features include:  <ul><li>Logging in / out flow with firebase for authentication</li><li>Firebase for the data base</li><li>Processing very complex data and displaying in several chart layouts</li><li>Download an image of the chart data in JPEG / PNG formats</li><li>The app takes in a 20k+ line of CSV data, formats it, sorts it and displays the data in various formats</li><li>Uploading new data / downloading current data.  Note: The client I created this for were enabled to upload the csv file to then be processed. They were also allowed to download that csv and upload a new one. This has been disabled to put into my portfolio website but the functionality is still there. </li><li>Logging in / out flow with firebase for authentication which is also used as the data base</li><li>Logging in / out flow with firebase for authentication which is also used as the data base</li></ul>",
    url: "https://atainr-robertgregg3s-projects.vercel.app/",
  },
  {
    title: "linkedin-clone",
    skill1: "back-end",
    skill2: "front-end",
    skill3: "html",
    skill4: "css3",
    skill5: "javascript",
    skill6: "react",
    skill7: "firebase",
    skill8: "material-ui",
    skill9: "api",
    skill10: "redux",
    details:
      "LinkedIn clone with username/email authentication, hosted with Firebase realtime database, using Redux to connect the front end to the back end.",
    url: "https://linkedin-clone-rob.web.app/",
  },
  {
    title: "amazon-clone",
    skill1: "back-end",
    skill2: "front-end",
    skill3: "html",
    skill4: "css3",
    skill5: "javascript",
    skill6: "react",
    skill7: "firebase",
    skill8: "material-ui",
    skill9: "api",
    details:
      "Amazon clone with username/email authentication, hosted with Firebase realtime database, shopping cart, payment processing (use stripe fake data: 4242 4242 4242 4242, 04/24, 424, 24242), order history and more!",
    url: "https://clone-robg.web.app/",
  },
  {
    title: "whatsapp-clone",
    skill1: "back-end",
    skill2: "front-end",
    skill3: "html",
    skill4: "css3",
    skill5: "javascript",
    skill6: "react",
    skill7: "firebase",
    skill8: "material-ui",
    skill9: "api",
    details:
      "A Whatsapp clone.  With google login authentication which when logged in gives you the ability to create chat rooms and anyone with that room ID can post. Real time database and server hosted with Firebase using the firebase API to pull and post data.",
    url: "https://whatsapp-clone-2-rob.web.app/",
  },
  {
    title: "facebook-clone",
    skill1: "back-end",
    skill2: "front-end",
    skill3: "html",
    skill4: "css3",
    skill5: "javascript",
    skill6: "react",
    skill7: "firebase",
    skill8: "material-ui",
    skill9: "api",
    details:
      "A Facebook clone.  With google or Facebook login authentication which when logged in gives you the ability to create a post, upload an image and add it to the timeline. Real time database and server hosted with Firebase using the firebase API to pull and post data.",
    url: "https://facebook-clone-rob.web.app/",
  },
  {
    title: "todo-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details:
      "Multiple todo lists, todo items, subtasks, due dates, add a note, view all/remaining/completed todos, delete completed, reorder drag and drop,  item, delete todo list, edit todo/list names, add favorite subtask, create account, edit email, upload profile pic, mobile responsive",
    url: "/portfolio/todo-app.html",
  },
  {
    title: "vid.io",
    skill1: "back-end",
    skill2: "bootstrap",
    skill3: "front-end",
    skill4: "html",
    skill5: "css3",
    skill6: "javascript",
    skill7: "react",
    skill8: "mern",
    skill9: "mongodb",
    skill10: "nodejs",
    skill11: "api",
    details:
      "A video rental app with CRUD operations, using the Axios to add, delete, save or update a movie. React navigation routing, pagination, filtering, sorting and form validation, tohether with bootstrap styling",
    url: "https://cranky-feynman-18b47d.netlify.app",
  },
  {
    title: "airbnb-clone",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "react",
    skill6: "material-ui",
    details:
      "An Airbnb clone, with a col date picker. React Router, material UI for styling",
    url: "https://agitated-mestorf-055f15.netlify.app/",
  },
  {
    title: "youtube-clone-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "react",
    skill6: "material-ui",
    skill7: "api",
    details:
      "A Youtube clone working with the Youtube API via Axios. Search for a video, see a list of related videos and choose to play the related videos which updates the main video section.  This is hosted on netlify and at the time of writing is only working on localhost",
    url: "https://jovial-tereshkova-cabdea.netlify.app/",
  },
  {
    title: "react-movie-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "react",
    skill6: "api",
    details:
      "Built with REACT, this Movie app uses a third-party API and allows users to search via the search bar for movies, and view the movie info.",
    url: "https://frosty-mahavira-354371.netlify.app/",
  },
  {
    title: "recipe-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "api",
    details:
      "This recipe app uses a third-party API and allows users to save their favorite meals to the local storage (just for demo purposes). As well as add meals you can also remove them once added, and also search using the search bar",
    url: "/portfolio/recipe-app.html",
  },
  {
    title: "note-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details:
      "This Notes app allows users to create and save notes to the local storage (just for demo purposes)",
    url: "/portfolio/note-app.html",
  },
  {
    title: "movie-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "api",
    details:
      "Built with Vanilla Javascript, this Movie app uses a third-party API and allows users to search via the search bar for movies, and view the movie info.",
    url: "/portfolio/movie-app.html",
  },
  {
    title: "password-generator",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details:
      "Generate a password using numbers, letters (uppercase and/or lowecase) and symbols. You can then copy to the clipboard.",
    url: "/portfolio/password-generator.html",
  },
  {
    title: "drawing-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details:
      "Using the canvas element I created a simple drawing app allowing you to change the size of the pen and the color.  Currently this is not for mobile/touch screen.",
    url: "/portfolio/drawing-app.html",
  },
  {
    title: "github-profiles",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    skill5: "api",
    details:
      "Type in the username from someone on github and the page will show their profile along with their repos.",
    url: "/portfolio/github-profiles.html",
  },
  // {
  //   title: "countdown-timer",
  //   skill1: "front-end",
  //   skill2: "html",
  //   skill3: "css3",
  //   skill4: "javascript",
  //   details: "A simple countdown timer",
  //   url: "/portfolio/countdown-timer.html",
  // },
  {
    title: "quiz-app",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details:
      "A simple quiz app that displays the number of correct answers at the end",
    url: "/portfolio/quiz-app.html",
  },
  {
    title: "scroll-animation",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "javascript",
    details: "Displaying some scroll based animation. Shiney object ahoy!",
    url: "/portfolio/scroll-animation.html",
  },
  {
    title: "bootstrap-dashboard",
    skill1: "bootstrap",
    skill2: "front-end",
    skill3: "html",
    skill4: "css3",
    skill5: "uiux",
    details: "Showing an example of a dashboard built using bootstrap",
    url: "/portfolio/bootstrap-dashboard.html",
  },
  {
    title: "HowToStreetDance",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "uiux",
    skill5: "photoshop",
    skill6: "premiere-pro",
    skill7: "websites",
    details:
      "I have built and designed many sites but here are 4 examples.  This website was created with a wordpress theme but heavily customized to fit our UI UX needs. It includes connecting various 3rd party apps together.  This site is the sales page for the members area (members.howtostreetdance.com) where there are hundreds of courses and lesson that we created, filmed, edited and added to the site. The membership area uses a membership app combined with an email service provider which provides access through tags added upon signup/completion of the questionnaire. The platform is free at the time of writing so you can take a look. A theme was used for the initial setup and was then customized with css.",
    url: "http://www.howtostreetdance.com",
  },
  {
    title: "S3 Studios",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "uiux",
    skill5: "photoshop",
    skill6: "premiere-pro",
    skill7: "websites",
    details:
      "This website was created with a wordpress drag and drop builder customized to fit our UI UX needs.  We added a woocommerce shop, payment providers, timetable for the classes run which was linked to the club management software.",
    url: "http://www.s3studios.co.uk",
  },
  {
    title: "BARTONSTEIN",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "uiux",
    skill5: "photoshop",
    skill6: "premiere-pro",
    skill7: "websites",
    details:
      "This website was created with a wordpress theme. Dealing with the client from beginning to completion",
    url: "http://www.bartonstein.co.uk",
  },
  {
    title: "TAKT",
    skill1: "front-end",
    skill2: "html",
    skill3: "css3",
    skill4: "uiux",
    skill5: "websites",
    details:
      "This website was created with a wordpress theme. Dealing with the client from beginning to completion",
    url: "http://www.takt.co.uk",
  },
  {
    title: "in-progress",
    skill1: "front-end",
    skill2: "back-end",
    skill3: "html",
    skill4: "css3",
    skill5: "react",
    skill6: "typescript",
    skill7: "nodejs",
    skill8: "graphql",
    details:
      "I am at present working on some full stack projects which will be added here soon.",
    url: "#/",
  },
];

const pfItemContainer = document.getElementById("pf-items");
const pfCatContainer = document.getElementById("pf-categories"); // container
const pfPageTransition = document.getElementById("pf-filter-page-animation"); // container for page transition
const pfPageTransitionTitle = document.getElementById("pf-filter-title"); // page transition title
const pfPPopupContainer = document.getElementById("popup-container"); // container for portfolio popup
const pfPPopupInfoEl = document.getElementById("popup-info"); // container for portfolio popup

let currentPfItem = 0; // index of portfolioItemData. Increases when

// function for the portfolio category navigation
function addPortfolioCategory() {
  for (let key of portfolioCategoryData) {
    const pfCategory = document.createElement("li");

    pfCategory.classList.add("pf-category");

    pfCategory.innerHTML = `
              <span class="icon-${key} spring icon"></span>
              <span class="pf-category-title">${key}</span>
              </li>           
          `;
    pfCatContainer.appendChild(pfCategory);

    pfCategory.addEventListener("click", () => {
      removeClickedClass(); // remove every pfCategory clicked class before adding it
      addClickedClass(); // set a delay so the class is added after the page transition
      triggerPageTransition();
      let filterName = pfCategory.innerText.toLowerCase();
      setTimeout(filterPortfolioItems(filterName), 300);
    });

    function addClickedClass() {
      pfCategory.classList.add("pf-category-clicked");
    }

    function triggerPageTransition() {
      pfPageTransition.classList.toggle("pf-filter-page-effects"); // add class to trigger page transition
      pfPageTransitionTitle.innerHTML = key; // make the h3 text = the button text that was clicked.
    }
  }
}

// function filterPortfolioItems(filterName) {
//   const pfFilterItems = document.querySelectorAll(".pf-item");

//   pfFilterItems.forEach((item) => {
//     item.classList[
//       !item.classList.contains(filterName.innerText.toLowerCase())
//         ? "add"
//         : "remove"
//     ]("hidden");
//   });
// }

function filterPortfolioItems(filterName) {
  const allPFItems = document.getElementsByClassName("pf-item");
  for (let i = 0; i < allPFItems.length; i++) {
    allPFItems[i].classList.add("hidden");
  }
  const allPFItemsToFilter = document.getElementsByClassName(filterName);
  for (let i = 0; i < allPFItemsToFilter.length; i++) {
    allPFItemsToFilter[i].classList.remove("hidden");
  }
}

// function to add the portfolio items, getting the data from the array
function addPortfolioItem() {
  for (let key in portfolioItemData) {
    // how to know which portfolio item ha sbeen clicked
    const currentPfItemData = portfolioItemData[currentPfItem]; // index of the portfolioItemData, currently at the first position (0)
    const pfItem = document.createElement("div"); // create a div

    let url = currentPfItemData.title.replace(/\s+/g, "").toLowerCase(); // remove spaces etc to make good URLS

    pfItem.classList.add("pf-item", "all"); // add the css style class pf-item and the "all" category to every item.

    let tagSkillsEl = []; // empty array to put all of the tags in when we iterate through the data

    for (let i = 1; i < portfolioCategoryData.length; i++) {
      // if I is less than the number of skills in the category data
      if (currentPfItemData["skill" + i]) {
        // if there is no element with the key of skill and the value of I then break. Otherwise:
        tagSkillsEl.push(`${currentPfItemData["skill" + i]}`); //  push that key to the empty tag array above
        pfItem.classList.add(`${currentPfItemData["skill" + i]}`); // add that skill as a class to the portfolio item
      }
    }

    // display the portfolio item with images and tags
    pfItem.innerHTML = `   
              <div class="pf-header">
                  <i class="circles"></i>
                  <span class="title">${currentPfItemData.title}</span>
              </div>
              <div class="pf-main">
                  <img src="/images/${url + 1}.jpg" alt="${
      currentPfItemData.title
    }" class="pf-item-hover-img" />
                  <div class="pf-tags">
                      <ul>
                          ${tagSkillsEl
                            .map(
                              (tag) =>
                                `<li class="pf-tag spring icon-${tag}">${tag}</li>`
                            )
                            .join("")}
                      </ul>
                  </div>
                  <img src="/images/${
                    url + 2
                  }.jpg" alt="" class="pf-item-img" />
              </div>
          </div>
          `;

    // hover to show the tags and additional image
    const pfItemHoverImg = pfItem.querySelector(".pf-item-hover-img");
    const pfItemTags = pfItem.querySelector(".pf-tags");

    pfItem.querySelector(".pf-main").addEventListener("mouseover", () => {
      pfItemHoverImg.classList.add("height");
      pfItemTags.classList.add("height");
    });

    pfItem.querySelector(".pf-main").addEventListener("mouseout", () => {
      pfItemHoverImg.classList.remove("height");
      pfItemTags.classList.remove("height");
    });

    pfItem.addEventListener("click", () => {
      displayPortfolioDetails(currentPfItemData);
    });

    pfItemContainer.appendChild(pfItem);
    currentPfItem++;
  }
}

function displayPortfolioDetails(currentPfItemData) {
  // clean the container beofre showing the pop up otherwise you get duplicates
  pfPPopupContainer.innerHTML = "";

  // update the popup info
  const pfPopupEl = document.createElement("div");

  pfPopupEl.classList.add("popup-info");

  let url = currentPfItemData.title.replace(/\s+/g, "").toLowerCase(); // remove spaces etc from title to create

  let tagSkillsPopupEl = [];

  for (
    let i = 1;
    i <= portfolioCategoryData.length;
    i++ // as above
  )
    if (currentPfItemData["skill" + i]) {
      tagSkillsPopupEl.push(currentPfItemData["skill" + i]);
    }

  pfPopupEl.innerHTML = `
              <div class="pf-info__left">
                <div id="close">
                    <i class="fas fa-times"></i>
                </div>
                <img 
                  src="/images/${url + 2}.jpg" 
                  alt="${currentPfItemData.title}"
                  class="pf-info__main-image"
                >
              </div>
              <div class="pf-info__right">
                <div class="pf-info-header">
                    <h3 class="pf-info-title">${currentPfItemData.title}</h3>
                    <a href="${
                      currentPfItemData.url
                    }"><button id="pf-info-btn">Go to project</button></a>
                </div>
                
                <div class="project-details">
                 <ul class="pf-info-tags">
                    ${tagSkillsPopupEl
                      .map(
                        (tag) =>
                          `<li class="pf-tag spring icon icon-${tag}">${tag}</li>`
                      )
                      .join("")}
                </ul>
                  <p class="details">${currentPfItemData.details}</p>
                  </div>
                </div>
              `;

  pfPPopupContainer.appendChild(pfPopupEl);

  // show the popup
  pfPPopupContainer.classList.remove("hidden");

  const popupCloseBtn = document.getElementById("close"); // popup close button
  popupCloseBtn.addEventListener("click", () => {
    pfPPopupContainer.classList.add("hidden");
  });
}

const pfPopupItems = document.querySelectorAll(".pf-item");

pfPopupItems.forEach((pfPopupItem) => {
  pfPopupItem.addEventListener("click", () => {
    alert("hi");
    displayPortfolioDetails(portfolioItemData);
    pfPPopupContainer.classList.remove("hidden");
  });
});

// remove every clicked class before adding it
function removeClickedClass() {
  let allPfCategories = document.querySelectorAll(".pf-category");

  allPfCategories.forEach((category) => {
    if (category.classList.contains("pf-category-clicked")) {
      category.classList.remove("pf-category-clicked");
    }
  });
}

// on page load display the categories and the portfolio items
addPortfolioCategory();
addPortfolioItem();
