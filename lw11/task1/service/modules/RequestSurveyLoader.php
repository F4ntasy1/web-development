<?php

class RequestSurveyLoader
{
    public function getSurvey() : Survey
    {
        $inputJSON = file_get_contents('php://input');
        $input = json_decode($inputJSON, true);

        $name = $input['name'] ?? "";
        $email = $input['email'] ?? "";
        $activity = $input['activity'] ?? "";
        $checkbox = $input['checkbox'] ?? false;
        return new Survey($name, $email, $activity, $checkbox);
    }
}