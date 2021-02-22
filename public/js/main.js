/*
  Programs main functionality using JQuery to adding and deleting user input for restaurants and movies
*/

$(document).ready(function () {
  $(".sidenav").sidenav();

  // variables to get on-click responses from user interaction

  let formInput = $("form.formInput");
  let userInput = $("input#userInput");
  let userRating = $("input#userRating");
  let userDelete = $(".userDelete");

  // addRating does a post to our "api/item" route and if successful, redirects us the the main page

  function addRating(Input, Rating) {
    console.log("test");
    $.post("/api/items", {
      userInput: Input,
      userRating: Rating,
    })
      .then(function () {
        window.location.replace("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  // Adds user input from form upon the submit click event with button

  formInput.on("submit", function (event) {
    event.preventDefault();
    let userData = {
      userInput: userInput.val().trim(),
      userRating: Number(userRating.val().trim()),
    };
    console.log(userData);
    if (!userData.userInput || !userData.userRating) {
      return;
    }
    addRating(userData.userInput, userData.userRating);
    userInput.val("");
    userRating.val("");
  });

  // Deletes the user entries upon the click event with trashcan icon

  userDelete.on("click", function (event) {
    let id = `${event.target.id}`;
    console.log(id);
    fetch(`/api/items/${id}/`, {
      method: "DELETE",
    }).then(function (response) {
      if (response.ok) {
        location.replace("/");
      }
    });
  });
});
