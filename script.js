var arr = [
  {
    name: "rose",
    image:
      "https://images.unsplash.com/photo-1596073419667-9d77d59f033f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "rose",
    image:
      "https://images.unsplash.com/photo-1548247632-f576832bd004?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "car",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "car",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "car",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shirt",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "shirt",
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=3314&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "phone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "phone",
    image:
      "https://images.unsplash.com/photo-1537589376225-5405c60a5bd8?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var container = document.querySelector(".container");

function showdata() {
  var clutter = "";
  arr.forEach(function (obj) {
    clutter += `<div class="products">
    <img class="image" src="${obj.image}" alt="" />
    <h3 class="discription">${obj.name}</h3>
  </div>`;
  });

  container.innerHTML = clutter;
}

function searchfunction() {
  var btn = document.querySelector(".button");
  var input = document.querySelector(".inputfield");
  var newarr;
  input.addEventListener("input", function () {
    newarr = arr.filter(function (elem) {
      return elem.name == input.value;
    });
  });
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e.target);
    var clutter = "";
    newarr.forEach(function (obj) {
      clutter += `<div class="products">
  <img class="image" src="${obj.image}" alt="" />
  <h3 class="discription">${obj.name}</h3>
</div>`;
    });
    container.innerHTML = clutter;
  });
}

searchfunction();
showdata();
