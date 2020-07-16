import "./emails-input.css";
function EmailsInput(outerContainer, emails) {
  var emailInput = {
    emails,
    validCount: 0,
    addEmail,
  };
  var listId = outerContainer.id + "-list";
  var inputId = outerContainer.id + "-input";

  var emailContainer = document.createElement("div");
  emailContainer.className = "emails";
  emailContainer.innerHTML = intializeTemplate();
  outerContainer.appendChild(emailContainer);
  var list = document.querySelector("#" + listId);
  var chip = buildChip("test@google.com");
  list.appendChild(chip);

  var input = document.querySelector("#" + inputId);
  input.addEventListener("keydown", handleKeyDown);
  input.addEventListener("focusout", handlefocus);
  input.addEventListener("paste", handlePaste);
  list.addEventListener("click", handleDelete);
  updateEmails(list, emails);

  function handleKeyDown(e) {
    var key = e.which || e.keyCode;
    if (key === 13 || key === 188) {
      // enter and comma keys
      e.preventDefault();
      addEmail(input.value);
      input.value = "";
    }
  }

  function handlefocus(e) {
    e.preventDefault();
    if (input.value.length > 0) {
      addEmail(input.value);
      input.value = "";
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    let pasteEmails = (event.clipboardData || window.clipboardData)
      .getData("text")
      .split(",");
    console.log(pasteEmails);
    pasteEmails.forEach(function (email) {
      emails.push(email);
    });
    updateEmails();
  }

  function handleDelete(e) {
    if (e.target.classList.value === "removeIcon") {
      emails = emails.filter((email) => {
        return email !== e.target.id;
      });
      updateEmails();
    }
  }

  function addEmail(email) {
    email = email.replace(",", "");
    emails.push(email);
    updateEmails();
  }

  function countValidEmails() {
    let count = 0;
    emails.forEach((email) => {
      if (validateEmail(email)) {
        count++;
      }
    });
    emailInput.validCount = count;
  }

  function intializeTemplate() {
    return (
      '<ul><div id="' +
      listId +
      '"></div><input id="' +
      inputId +
      '" type="text" placeholder="add more people..." /></ul>'
    );
  }

  function updateEmails() {
    list.innerHTML = emails
      .map((email) => {
        if (validateEmail(email)) {
          return (
            "<li>" +
            email +
            '<div class="removeIcon" id="' +
            email +
            '"></div></li>'
          );
        } else {
          return (
            "<li class='invalidEmail'>" +
            email +
            '<div class="removeIcon" id="' +
            email +
            '"></div></li>'
          );
        }
      })
      .join("");
    countValidEmails();
  }

  return emailInput;
}

function buildChip(email) {
  var chip = document.createElement("div");
  chip.classList.add("chip");
  chip.innerHTML = '<span class="closebtn" onclick="">' + email + "</span>";
  return chip;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

window.EmailsInput = EmailsInput;
