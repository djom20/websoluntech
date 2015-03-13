<?php
ob_start();
error_reporting(-1);
	/**
	 * Description of send.php
	 *
	 * Envio de Correos en el
	 * formulario de contacto
	 *
	 * @author djom202
	 */

	function _Mail(){

		if($_SESSION["csrf"] != $_POST["csrf"])
		{
			http_response_code(500);  	
	        echo json_encode(array('_code' => 500, '_response' => 'Petición no válida'));  		
			die;
		}

   $headers = "From: " . strip_tags('no-reply@soluntech.com') . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

 //    $_POST['name'] 		= "Jonathan Olier";
	// $_POST['email'] 		= "jolier@soluntech.com";
	// $_POST['tel'] 		= "3177963884";
	// $_POST['message'] 	= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur maiores, magnam illo qui, quidem earum accusamus sapiente molestias adipisci vel vero molestiae facilis error provident doloremque eaque quisquam quaerat eligendi.";

	$table 	= "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"max-width: 600px; margin: auto;\">
	                <tbody>
	                    <tr>
	                    	<td style=\"padding-bottom: 8px;\">
	                    		<table style=\"background-color:#fff;\">
	                    			<tbody>
	                    				<tr>
					                        <td style=\"color: #1e80b6; padding-top: 20px; padding-left: 20px; padding-right: 20px;\">
					                            <p> Nombre </p>
					                        </td>
					                        <td style=\" padding-top: 20px; text-align: right; padding-right: 20px;\">
					                            ". $_POST['name'] ."
					                        </td>
	                    				</tr>
	                    				<tr>
											<td style=\"color: #1e80b6; padding-left: 20px; padding-right: 20px;\">
					                            <p> Email </p>
					                        </td>
					                        <td style=\"text-align: right; padding-right: 20px;\">
					                            ". $_POST['email'] ."
					                        </td>
	                    				</tr>
	                    				<tr>
					                        <td style=\"color: #1e80b6; padding-bottom: 10px; padding-left: 20px; padding-right: 20px;\">
					                            <p> Telefono </p>
					                        </td>
					                        <td style=\"text-align: right; padding-right: 20px;\">
					                            ". $_POST['tel'] ."
					                        </td>
	                    				</tr>
				                    </tbody>
	                    		</table>
	                    	</td>
	                    </tr>
	                    <tr>
	                        <td style=\"padding-bottom: 8px;\">
	                    		<table style=\"background-color:#fff;\">
	                    			<tbody>
	                    				<tr>
					                        <td style=\"color: #1e80b6; padding-left: 20px; padding-top: 20px; padding-bottom: 10px;\">
					                            <p> Mensaje </p>
					                        </td>
	                    				</tr>
	                    				<tr>
					                        <td style=\"text-align: left; padding-bottom: 10px; padding-left: 20px; padding-right: 20px;\">
					                            ". $_POST['message'] ."
					                        </td>
	                    				</tr>
				                    </tbody>
	                    		</table>
	                    	</td>
	                    </tr>
	                    <tr>
							<td>
								<table width=\"100%\" border=\"0\" align=\"center\" style=\"color:#353e4a;font-family:Arial,sans-serif;margin:auto;background-color:#ffffff\" cellpadding=\"0\" cellspacing=\"0\">
                                    <tbody>
	                                    <tr>
	                                        <td style=\"padding-bottom:15px; padding-top:15px\" align=\"center\">
	                                            <table>
	                                                <tbody>
		                                                <tr>
		                                                    <td align=\"center\" style=\"background-color:#ef5401;padding:7px;font-family:Arial,sans-serif; max-width: 250px;\">
		                                                        <a style=\"background-color:#ef5401;font-family:Arial,sans-serif;border:medium none;border-radius:3px;color:white;font-size:21px;min-height:30px;text-decoration:none;padding-top:7px;padding-bottom:7px;padding-left:30px;padding-right:30px\" href=\"http://www.soluntech.com\" target=\"_blank\">
		                                                        	Conocenos
		                                                        </a>
		                                                    </td>
		                                                </tr>
	                                            	</tbody>
	                                            </table>
	                                        </td>
	                                    </tr>
	                                </tbody>
                                </table>
							</td>
	                    </td>
	                    <tr>
							<td style=\"padding-bottom: 0px;\">
								<table width=\"100%\" border=\"0\" align=\"center\" style=\"font-family:Arial,sans-serif;font-size:15px;margin:auto;background-color:#ffffff;color:#353e4a\" cellpadding=\"0\" cellspacing=\"0\">
                                    <tbody>
                                        <tr><td style=\"padding-left:25px;padding-right:15px;padding-top:20px\">Att:</td></tr>
                                        <tr><td style=\"font-weight:bold;padding-top:10px;padding-bottom:10px;padding-left:25px;padding-right:15px\"><i>El equipo de Soluntech</i></td></tr>
                                        <tr><td style=\"height:20px\">&nbsp;</td></tr>
                                    </tbody>
                                </table>
							</td>
	                    </tr>
	                    <td style=\"background-color:#ececec\">
                            <table width=\"100%\" border=\"0\" align=\"center\" style=\"color:#353e4a;font-family:Arial,sans-serif;font-size:14px;margin:auto;padding-bottom:10px\">
                                <tbody>
                                    <tr>
                                        <td style=\"color:#717175;font-size:12px;padding-top:10px;padding-bottom:10px\">
                                            Este email se ha generado automáticamente. Por favor, no conteste a este email.
                                            Si tiene alguna pregunta o necesita ayuda, por favor haga click en <a href=\" \" style=\"color:#353e4a\" target=\"_blank\">Ayuda</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style=\"color:#717175;font-size:12px;padding-top:10px;padding-bottom:10px\">Si no desea recibir más alertas como esta, por favor, haga click en <a href=\" \" style=\"color:#353e4a\ target=\"_blank\">Baja de alertas</a>.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
	                </tbody>
	            </table>";

	$html = "<html>
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
	                <table style=\"background-color:#ececec; width: 100%!important;\">
						<tbody>
							<tr>
		                        <td colspan=\"3\" style=\"text-align: center;\">
		                            <img width=\"170\" height=\"131\" src=\"http://www.soluntech.com/_/rsrc/1412805517236/config/customLogo.gif?revision=7\" alt=\"Logo de Soluntech\" />
		                        </td>
		                    </tr>
							<tr>
								<td>". $table ."</td>
							</tr>
						</tbody>
					</table>
				</body>
			</html>"; 

  if(mail('jolier@soluntech.com', 'Send', $html, $headers))
  {
	http_response_code(200);
  	echo json_encode(array('_code' => 200, '_response' => 'Se envio el correo correctamente.'));
  }
  else
  {
	http_response_code(500);  	
	echo json_encode(array('_code' => 500, '_response' => 'Error Interno no se pudo enviar email'));  		
  }
  
	
	

	
	// }else{ // echo 'No se envio el correo';
	// 	echo $html;
	// }

	}



	function genCsrfToken(){
		 return   hash("sha512",md5(time() . microtime()) . '$_S0lunt3ch;');
	}


echo $_SERVER["REQUEST_METHOD"];

	switch  ($_SERVER["REQUEST_METHOD"])
	{

		case "GET":
				echo genCsrfToken();
		break;

		case "POST":
			  _Mail();
		break;

	}

