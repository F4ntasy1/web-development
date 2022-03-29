<?php

function getQueryStringParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}

header("Content-Type: text/plain");
$leng = 0;
$pass = getQueryStringParameter('password');
if ($pass <> null) 
{
    $leng = strlen($pass);   // Инициализация переменных
}

$security = 0; //переменная вывода надежности пароля в виде числа
$numbers = 0;
$symbols = 0;
$upperreg = $leng;
$lowerreg = $leng;
$repeat = 0;
for ($i = 0; $i < $leng; $i++) 
{
    if (is_numeric($pass[$i])) 
    {
        $numbers++;  //Проверка цифр
    }
    if (ctype_alpha($pass[$i])) 
    {
        $symbols++;  //Проверка букв
    }
    if (ctype_upper($pass[$i])) 
    {
        $upperreg--;  //Проверка символов верхнего регистра
    }
    if (ctype_lower($pass[$i])) 
    {
        $lowerreg--;  //Проверка символов нижнего регистра
    }
}
if ($numbers === $leng) 
{
    $security -= $leng;  //Сравнивает длину пароля и количество цифр(если одинакого, то)
}
if ($symbols === $leng) 
{
    $security -= $leng;  //Сравнивает длину пароля и кол-во букв(вычитает длину из кон.знач.)
}
if ($leng > $upperreg) 
{
    $security += 2 * ($upperreg);  //Прибавляет, если есть символы верхнего регистра
}
if ($leng > $lowerreg) 
{
    $security += 2 * ($lowerreg);  //Прибавляет, если есть символы нижнего регистра
}
for ($i = 0; $i <= $leng; $i++) 
{	//Проверка на повторение символов
    for ($j = 0; $j <= $leng; $j++) 
    {
        if (($pass[$i] === $pass[$j]) and ($i <> $j)) 
	{
            $repeat += 1;
            break;
        }
    }
}
$security += 4 * $leng + 4 * $numbers - $repeat;  //Финальный рассчёт
print_r($security);  //вывод результата на экран


//Password Strength



