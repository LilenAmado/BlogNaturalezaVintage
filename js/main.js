$(document).ready(()=>{
//Slider

    if(window.location.href.indexOf('index') > -1){

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true
        });

    }
    
    // POSTS
    if(window.location.href.indexOf('index') > -1){

        let posts = [{
            title: 'El comportamiento de las aves',
            date: 'Publicado el día: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse.'
        },{
            title: 'La naturaleza y sus secretos',
            date: 'Publicado el día: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse.'
        },{
            title: '¿Las mascotas son de la familia?',
            date: 'Publicado el día: ' + moment().date() + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolores. Delectus, dicta nesciunt dignissimos veritatis est nam nihil deserunt eum cupiditate fugit eaque doloribus alias, ut earum necessitatibus veniam esse.'
        }];
    
        posts.forEach((item,index)=>{
            let post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
                <hr><br>
            `;    
    
            $('#posts').append(post);
        });

    }

    // Selector de tema

    let theme = $('#theme'); //Hoja de estilos de CSS (link)
    
    $('#to-green').click(()=>{
        theme.attr("href","css/green.css");
    });
    $('#to-red').click(()=>{
        theme.attr("href","css/red.css");
    });
    $('#to-blue').click(()=>{
        theme.attr("href","css/blue.css");
    });

    //Scroll arriba de la web

    $('.subir').click((e)=>{
        e.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false
    });

    // Login Falso con Local Storage
    $('#login form').submit(()=>{
        var form_name = $('#form_name').val();
        console.log(form_name)
        localStorage.setItem("form_name", form_name);
    });
     
    var form_name = localStorage.getItem("form_name");

    if(form_name!= null && form_name != "undefined"){
        let about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong> Bienvenido, " + form_name + "</strong><br>")//.css("text-align","center");

        about_parrafo.append('<br><br><a href="#" id="logout"> Cerrar Sesión </a>');

        $('#login').hide(); // Para que desaparezca el div identificate

        $('#logout').click(()=>{
            localStorage.clear();
            location.reload(); //para que se actualice la pag
        });
    }

    //ACORDEON
    if(window.location.href.indexOf('about') > -1){
        $('#acordeon').accordion();
    }


    //RELOJ
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){ //Para que actualice cada segundo
            let reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        },1000);
    }

    
});