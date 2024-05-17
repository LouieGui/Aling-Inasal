function showDetail(imageSrc, title, description, price) {
    var detailsSection = document.getElementById("detailsSection");
    var popupImage = document.getElementById("popupImage");
    var popupTitle = document.getElementById("popupTitle");
    var popupDescription = document.getElementById("popupDescription");
    var popupPrice = document.getElementById("popupPrice");

    popupImage.src = imageSrc;
    popupTitle.textContent = title;
    popupDescription.textContent = description;
    if (price) {
        popupPrice.textContent = price;
    } else {
        popupPrice.textContent = ''; 
    }

    detailsSection.style.visibility = "visible"; 
}

function closePopup() {
    var detailsSection = document.getElementById("detailsSection");
    detailsSection.style.visibility = "hidden"; 
}
