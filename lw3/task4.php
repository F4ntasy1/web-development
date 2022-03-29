<?php

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}

header("Content-Type: text/plain");
$firstname = getQueryStringParameter('first_name');
$lastname = getQueryStringParameter('last_name');
$email = getQueryStringParameter('email');
$age = getQueryStringParameter('age');
if ($email <> null) 
{
    $filename = './data/' . $email . '.txt';
}
if (file_exists($filename)) 
{   //Проверка на существование файла. Если сущ., меняет значения, если введён email
    $array = file($filename);
    if ($firstname) 
    {
        $array[0] = 'First Name: ' . $firstname . "\r\n";
    }
    if ($lastname) 
    {
        $array[1] = 'Last Name: ' . $lastname . "\r\n";
    }
    if ($email) 
    {
        $array[2] = 'Email: ' . $email . "\r\n";
    }
    if ($age) 
    {
        $array[3] = 'Age: ' . $age . "\r\n";
    }
    $myfile = $array;
    file_put_contents($filename, $myfile);
}
if ($email and !file_exists($filename)) 
{   //Если файл сущ. и в строке введён email, то создаёт файл и записывает
    $array[0] = 'First Name: ' . $firstname . "\r\n";
    $array[1] = 'Last Name: ' . $lastname . "\r\n";
    $array[2] = 'Email: ' . $email . "\r\n";
    $array[3] = 'Age: ' . $age . "\r\n";
    file_put_contents($filename, $array);
}


//Survey Saver