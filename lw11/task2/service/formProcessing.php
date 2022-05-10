<?php

require_once("./modules/common.inc.php");

$datagives = new DataGives();

$requestloader = new RequestLoader();

$number = $requestloader->getContent();

$datagives->createData($number);

$parameters = $datagives->getData();

$number++;
echo json_encode($parameters);