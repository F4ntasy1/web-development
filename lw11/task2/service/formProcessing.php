<?php

require_once("./modules/common.inc.php");

$datagives = new DataGives();

$datagives->createData();

$users = $datagives->getData();

echo json_encode($users);