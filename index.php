<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents('./content.txt');
echo $data;
