function compareArray(arr1, arr2) {
  let isEquals = true;

  arr1.forEach((item, index) => {
    if (isEquals) {
      if (item !== arr2[index]) {
        isEquals = false;
        return;
      }
      return;
    }
    return;
  });
  return isEquals;
}

function isValidHtml(html) {
  if (html && typeof html === "string") {
    if (html.trim() === "") {
      return true;
    } else {
      let tagsArray = html.split(">");
      tagsArray = tagsArray.filter((item) => item !== "");

      let openArray = [];
      let closeArray = [];

      tagsArray.forEach((element) => {
        if (element.match("/")) {
          let newArray = element.split("/");
          newArray = newArray.filter(
            (item) => item !== "<" && item !== "" && item !== "/"
          );
          closeArray = [...closeArray, ...newArray];
        } else {
          let newArray = element.split("<");
          newArray = newArray.filter((item) => item !== "<" && item !== "");
          openArray = [...openArray, ...newArray];
        }
      });

      closeArray = closeArray.reverse();
      return compareArray(openArray, closeArray);
    }
  }
}
