// KEY = Hw6qfws3Axc2VfVsnS2keuM44BFB81nXnDvvyh1a

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  requisicao();
  console.log("funcionou");
});

function requisicao() {
  const data = $("#input-date").val();
  $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=Hw6qfws3Axc2VfVsnS2keuM44BFB81nXnDvvyh1a&date=${data}`,
    success: function (response) {
      showData(response);
    },
    error: function () {
      alert("Error. Try a date from June 16, 1995 to the present day!");
    },
  });
}

function showData(data) {
  const video = $("#player");
  const imagem = $("#picture");
  const urlMidia = data.url;
  const tipoMedia = JSON.stringify(data.media_type);
  $("#title").text(data.title);
  $("#explanation").text(data.explanation);
  $("#date").text(data.date);

  if (tipoMedia == '"image"') {
    $("#player").hide();
    imagem.attr("src", urlMidia);
    $("#picture").show();
  } else {
    $("#player").show();
    video.attr("src", urlMidia);
    $("#picture").hide();
  }
}
