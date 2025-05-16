//Manejo de clic en miniaturas para mostrar información en un modal
$(document).ready(function () {
    $('.miniatura').click(function () {
        var ttl = $(this).data('titulo');
        var desc = $(this).data('descripcion');
        var dur = $(this).data('duracion');
        var imgSrc = $(this).find('img').attr('src');

        $('#modTtl').text(ttl);
        $('#modDesc').text(desc);
        $('#modDur').text(dur);
        $('#modImg').attr('src', imgSrc);

        var modalInfo = new bootstrap.Modal($('#modInfo'));
        modalInfo.show();
    });

    //Inicialización del carrusel principal ***

    var carrPrin = $('#carrPrin');
    var carousel = new bootstrap.Carousel(carrPrin, {
        interval: 5000,
        ride: 'carousel'
    });

    //Actualización inicial de la información principal al cargar la página
    actInfoPrin(0);
    //Actualización de la información principal al cambiar de slide en el carrusel
    carrPrin.on('slid.bs.carousel', function (e) {
        var indAct = $(this).find('.carousel-item.active').index();
        actInfoPrin(indAct);
    });
    //Función para actualizar el título y la descripción fija según el slide activo
    function actInfoPrin(index) {
        var elemAct = carrPrin.find('.carousel-item').eq(index);
        var imgAct = elemAct.find('.bg-image').css('background-image');
        var ttl = "";
        var desc = "";

        if (imgAct.includes('asta.jpg')) {
            ttl = "Black Clover";
            desc = "En un reino mágico, un joven sin magia llamado Asta sueña con convertirse en el próximo Rey Mago, desafiando todas las expectativas. ¡Acompaña su increíble camino lleno de esfuerzo y amistad!";
        } else if (imgAct.includes('soloLeve.jpg')) {
            ttl = "Solo Leveling";
            desc = "Si disfrutas de las historias de crecimiento de personajes con batallas épicas y un toque de fantasía oscura, Solo Leveling te atrapará con su protagonista y su asombroso desarrollo de poder.";
        } else if (imgAct.includes('Demon.png')) {
            ttl = "Jujustu Kaisen";
            desc = "Un joven se fusiona con una maldición poderosa y ahora debe luchar contra otros seres oscuros como estudiante de hechicería. ¡Prepárate para acción intensa y un mundo sobrenatural fascinante!.";
        }

        $('.fixed-info h2').text(ttl);
        $('.fixed-info p').text(desc);
    }

});