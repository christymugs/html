<?php
function remove_all($str, $char) {
    $result = '';
    for ($i = 0; $i < strlen($str); $i++) {
        if ($str[$i] != $char) {
            $result .= $str[$i];
        }
    }
    return $result;
}

$string = "Summer is here!";
$charToRemove = 'e';
echo remove_all($string, $charToRemove);
?>