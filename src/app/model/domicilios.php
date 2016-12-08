<?php

//Cabeceras HTTP para autorizar el acceso desde el móvil.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

// configuration
$dbhost 	= "mysql4.000webhost.com";
$dbname		= "a8109204_moviles";
$dbuser		= "a8109204_moviles";
$dbpass		= "nokia1100";

if($_SERVER['REQUEST_METHOD'] == 'POST')
{
	$jsonDomicilio = file_get_contents("php://input");    
	$domicilioObj = json_decode($jsonDomicilio);
	

    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

    // query
    $sql = "INSERT INTO domicilios (cedula, nombre, telefono, direccion, tipo_pago, principio, sopa, bebida, postre) VALUES (:cedula, :nombre, :telefono, :direccion, :tipo_pago, :principio, :sopa, :bebida, :postre)";
    $q = $conn->prepare($sql);

    $result = $q->execute(array(':cedula'=>$domicilioObj->cedula,
                      ':nombre'=>$domicilioObj->nombre,
                      ':telefono'=>$domicilioObj->telefono,
                      ':direccion'=>$domicilioObj->direccion,
                      ':tipo_pago'=>$domicilioObj->tipo_pago,
                      ':principio'=>$domicilioObj->principio,
                      ':sopa'=>$domicilioObj->sopa,
                      ':bebida'=>$domicilioObj->bebida,
					  ':postre'=>$domicilioObj->postre
                ));
				
	 if($result){
        //Todo salió bien
        echo json_encode(array(
            resultado => 1,
            mensaje => 'Pedido guardado con exito '
        ));
    }else{
        //Hubo un error
        echo json_encode(array(
            resultado => 0,
            mensaje => 'Hubo un error al guardar el pedido',
            exception => $q->errorInfo()
        ));
    }	
}
if($_SERVER['REQUEST_METHOD'] == 'GET')
{
	$wherePrincipio = "";
	
	if(isset($_REQUEST['principio']))
	{
		$tipoPrincipioABuscar = $_REQUEST['principio'];
		$wherePrincipio = "AND  principio > $tipoPrincipioABuscar";
	}
	
	
    // database connection
    $conn = new PDO("mysql:host=$dbhost;dbname=$dbname",$dbuser,$dbpass);

    // query
    $sql = "SELECT * from domicilios where true $wherePrincipio";
    $q = $conn->prepare($sql);
	
	$q->execute();

	$resultados = $q->fetchAll(PDO::FETCH_ASSOC); 
	
	echo json_encode($resultados);		
}

?>