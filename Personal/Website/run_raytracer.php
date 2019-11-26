#!/usr/bin/php
<?php
$out = '';
echo "running " . $_POST["textFile"];
$command = escapeshellcmd('./raytracer '.$_POST("textFile"));
echo $command;
shell_exec($command, $out);
echo $out;
echo "Enjoy the image!";
?>