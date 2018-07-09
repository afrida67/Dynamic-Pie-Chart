<?php
$myFile = "data.json";
$arr_data = array();
try {
//Get form data
    $formdata = array(
        'label' => $_POST['label'],
        'val' => $_POST['val']
    );
    //Get data from existing json file
    $jsondata = file_get_contents($myFile);
   // converts json data into array
    $arr_data = json_decode($jsondata, true);
       /* this is the matching label code */
    foreach ($arr_data as $key => $item) {
 
        if ($formdata['label'] == $item["label"]) {

            $arr_data[$key]["val"] = $formdata['val'];
          
        } 
    }

  //write json data into data.json file
    if (!file_put_contents($myFile, json_encode($arr_data, JSON_PRETTY_PRINT))) {
        echo "error";
    }
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage(), "\n";
}
header('Location: '.$_SERVER['HTTP_REFERER']); exit;

?>