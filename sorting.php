
<?php
// I don't know what I'm doing.
//No me queda claro como funciona.
function columns($arr) {
    if (count($arr) == 0)
        return array();
    else if (count($arr) == 1)
        return array_chunk($arr[0], 1); //divide el arrelo

    array_unshift($arr, NULL); //añade NULL al inicio
    // array_map(NULL, $arr[0], $arr[1], ...)
    $transpose = call_user_func_array('array_map', $arr);
    return array_map('array_filter', $transpose);
}

function beadsort($arr) {
    foreach ($arr as $e)
        $poles []= array_fill(0, $e, 1);
    return array_map('count', columns(columns($poles)));
}
?>

<html>
<head>
    <title>Sorting Algorithms</title>
    <script src="sorting.js"></script>
</head>
<body>
    <div>
        <h1>Sorting Algorithms</h1>
        <h5>Gravity Sort O(N): <?php print_r(beadsort(array(5,3,1,7,4,1,1))); ?> </h5>
    </div>
</body>
</html>