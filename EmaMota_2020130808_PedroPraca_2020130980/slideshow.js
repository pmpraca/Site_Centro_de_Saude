//Função para apresentar o slide
function plusSlides(n)  
{
    showSlides(slideIndex += n); //mostra o slide correspondente ao que esta em memoria acrescido ao parametro
}

function currentSlide(n)
{
    showSlides(slideIndex = n); //vai diretamente para um determinado slide
}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlides"); //coloca num array todos os elementos da class mySlides 
    var dots = document.getElementsByClassName("dot"); //coloca num array todos os elementos da class dot "bolinhas"

    //Se n > que nº de slides passa para o primeiro
    if (n > slides.length) {slideIndex = 1} 

    //Se n < 1 passa para o ultimo
    if (n < 1) {slideIndex = slides.length}

    //ciclo que esconde todas as imagens
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }

    //ciclo que inativa("muda a classe, mesmo que por a bolinha cinzenta clara") todas as bolas
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    //mostra o slide pretendido
    slides[slideIndex-1].style.display = "block";  

    //acrescenta classe para a bola atual ficar ativa (ficar cinzenta escura)
    dots[slideIndex-1].className += " active";
    return true;
}