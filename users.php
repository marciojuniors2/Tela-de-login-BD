<?php
    session_start ();
    include_once ( 'config.php' );
    // print_r($_SESSION);
    if ((! isset ( $ _SESSION [ 'email' ]) == true ) e (! isset ( $ _SESSION [ 'senha' ]) == true ))
    {
        unset( $ _SESSION [ 'email' ]);
        unset( $ _SESSION [ 'senha' ]);
        header ( 'Localização: login.php' );
    }
    $ logado = $ _SESSION [ 'email' ];
    if (! vazio ( $ _GET [ 'pesquisar' ]))
    {
        $ dados = $ _GET [ 'pesquisar' ];
        $ sql = "SELECT * FROM usuarios WHERE id LIKE '%$data%' ou nome LIKE '%$data%' ou email LIKE '%$data%' ORDER BY id DESC" ;
    }
    senão
    {
        $ sql = "SELECT * FROM usuarios ORDER BY id DESC" ;
    }
    $ resultado = $ conexao -> consulta ( $ sql );
?>