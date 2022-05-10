<?php

require_once("./modules/common.inc.php");

$requestSurveyLoader = new RequestSurveyLoader();
$surveyFileStorage = new SurveyFileStorage();

$survey = $requestSurveyLoader->getSurvey();

$surveyFileStorage->getData($survey);

$surveyFileStorage->saveSurvey();