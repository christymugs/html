<?php
function triangle($size) {
    for ($i = 1; $i <= $size; $i++) {
        echo str_repeat('*', $i) . "\n";
    }
}
triangle(5);
?>