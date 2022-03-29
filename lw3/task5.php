<?php

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}

header("Content-Type: text/plain");
$email = getQueryStringParameter('email');
if ($email) 
{
    $filename = './data/' . $email . '.txt';
}
if (file_exists($filename)) 
{
    $array = file($filename);
    for ($i = 0; $i < 4; $i++) 
    {
        print_r($array[$i] . "\n");
    }   
}

//Survey Info