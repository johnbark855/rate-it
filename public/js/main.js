$(document).ready(function () {
  $(".sidenav").sidenav();

  let formInput = $("form.formInput");
  let userInput = $("input#userInput");
  let userRating = $("input#userRating");
  let userDelete = $("input#userDelete");

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
  // addRating does a post to our "api/item" route and if successful, redirects us the the main page
  function addRating(Input, Rating) {
    // console.log(userInput, userRating);
    // console.log(typeof userInput, typeof userRating);
    console.log("test");
    $.post("/api/items", {
      userInput: Input,
      userRating: Rating,
    })
      .then(function () {
        window.location.replace("/");
        // If there's an error, log the error
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  userDelete.on("delete", function (event) {
    $.delete("api/items:id", {
      id: id,
    })
      .then(function () {
        window.location.replace("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  });
});
