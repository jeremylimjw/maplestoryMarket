for (let i = 0; i < items.length; i++) {
    let template = 
    '<div class="card" data-name="' + items[i].name + '" data-src="' + items[i].src + '" data-thumb="' + items[i].thumb + '" data-stats="' + items[i].stats + '" data-co="' + items[i].co + '" data-aw="' + items[i].aw + '" data-status="' + items[i].status + '">' +
        '<div class="image">' +
            '<img height="180" width="180" src="' + items[i].thumb + '">';

    if (items[i].status == "SOLD") {
        template += '<span class="sold-overlay">SOLD</span>';
    } else if (items[i].status == "RESERVED") {
        template += '<span class="reserved-overlay">RESERVED</span>';
    }

    template += '</div>' +
        '<div class="title">' +
            '<span title="' + items[i].name + '"><b>' + items[i].name + '</b></span>' +
        '</div>' + 
        '<div class="text">' +
        '<span style="color: #808080;">' + items[i].stats + '</span>';

    if (items[i].status != "SOLD") {
        template += 
            '<br>' +
            '<span>c/o ' + items[i].co + '</span>' +
            '<br>' +
            '<span>a/w ' + items[i].aw + '</span>' +
        '</div>';
    } else {
        template += 
            '<br>' +
            '<span>&nbsp;</span>' +
            '<br>' +
            '<span>&nbsp;</span>' +
        '</div>';
    }

    template += '<br>' +
        '<p class="sub-text">Click to view item</p>' + 
        '</div>';

    document.getElementById("body").innerHTML += template;
}

var cards = document.getElementsByClassName("card");

var click_function = function() {
    document.getElementById("selected-name").innerText = this.getAttribute("data-name");
    document.getElementById("selected-co").innerText = this.getAttribute("data-co");
    document.getElementById("selected-aw").innerText = this.getAttribute("data-aw");
    document.getElementById("selected-stats").innerText = this.getAttribute("data-stats");
    document.getElementById("selected-status").innerText = this.getAttribute("data-status");

    document.getElementById("selected-src").src = 'public/placeholder.png';
    document.getElementById("selected-src").src = this.getAttribute("data-src");

    openModal();
};

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', click_function, false);
}

var container = document.getElementById("container");
var closeButton = document.getElementById("close-button");
var modal = document.getElementById("modal");

function closeModal() {
    container.classList.remove("blur");
    modal.classList.remove("active");
}

function openModal() {
    container.classList.add("blur");
    modal.classList.add("active");
}

closeButton.onclick = closeModal;

window.onclick = function(event) {
    if (event.target == document.getElementsByTagName("BODY")[0]) {
        closeModal();
    }
}

document.onkeydown = function(e) {
    if (e.key == "Escape") {
        closeModal();
    }
}

// var img = document.getElementById('changer')

// function loaded() {
//   console.log('loaded')
// }

// if (img.complete) {
//   loaded()
// } else {
//   img.addEventListener('load', loaded)
//   img.addEventListener('error', function() {
//     console.log('error')
//   })
// }
