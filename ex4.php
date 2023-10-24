<?php
function word_count($str) {
    $wordCount = 0;
    $isInsideWord = false;

    for ($i = 0; $i < strlen($str); $i++) {
        if ($str[$i] != ' ' && !$isInsideWord) {
            $wordCount++;
            $isInsideWord = true;
        } elseif ($str[$i] == ' ') {
            $isInsideWord = false;
        }
    }

    return $wordCount;
}

$phrase = "hello, how are you?";
echo word_count($phrase);
?>