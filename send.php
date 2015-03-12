<?php
	/**
	 * Description of send.php
	 *
	 * Envio de Correos en el
	 * formulario de contacto
	 *
	 * @author djom202
	 */

	$headers = "From: " . strip_tags('no-reply@soluntech.com') . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	$html 	= "<html>
                <head>
                    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
                    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">
                    <style>
                        * {
                            font-family: 'Roboto', sans-serif;
                            outline: none;
                        }
                        td {
                            width: 900px;
                        }
                    </style>
                </head>
                <body>
                	<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"border:2px solid #9b9b9b\">
		                <tbody>
		                    <tr>
		                        <td colspan=\"3\" style=\"text-align: center;\">
		                            <img width=\"135\" height=\"131\" src=\" \" alt=\"header\" />
		                        </td>
		                    </tr>
		                    <tr>
		                        <td colspan=\"3\" style=\"border-bottom:1px solid #9b9b9b; text-align: center;\">
		                            <p> Titulo </p>
		                        </td>
		                    </tr>
		                    <tr>
		                        <td colspan=\"3\" style=\"border-bottom:1px solid #9b9b9b\">
		                            <center><strong>Comentarios</strong></center>
		                        </td>
		                    </tr>
		                    <tr bgcolor=\"#e7ecf1\">
		                        <td colspan=\"3\">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam voluptatum in, odio consequatur possimus velit maiores consectetur distinctio ab minima, debitis cupiditate. Veritatis veniam cumque ut voluptates voluptate labore minima.
		                        </td>
		                    </tr>
		                </tbody>
		            </table>
		        </body>
		    </html>";

	if(mail('jolier@soluntech.com', 'Send', $html, $headers)){
		echo 'Se envio el correo correctamente.';
	}