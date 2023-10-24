<?php
function countWords($str) {
    $str = strtolower($str);
    $words = str_word_count($str, 1);
    $wordCount = array_count_values($words);
    return $wordCount;
}
$phrase = "This is a test. This is only a test.";
$wordCounts = countWords($phrase);
print_r($wordCounts);
?>