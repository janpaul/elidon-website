<?php
$data['remote_addr'] = $_SERVER["REMOTE_ADDR"];
$data['http_user_agent'] = $_SERVER["HTTP_USER_AGENT"];
$data['request_method'] = $_SERVER["REQUEST_METHOD"];
$data['request_time'] = $_SERVER["REQUEST_TIME"];
$data['remote_port'] = $_SERVER["REMOTE_PORT"];

header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');
echo json_encode($data);
?>
