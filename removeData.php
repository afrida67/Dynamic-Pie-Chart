<?php
   
   $myFile = "data.json";
   $arr_data = array(); // create empty array
   
  try
  {
	   //Get form data
	   $formdata = array(
          'label'=> $_POST['label'],
          'val' => $_POST['val']
	   );

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   // Pop user data to array
	   array_pop($arr_data);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
		
		 header('Location: '.$_SERVER['HTTP_REFERER']); exit;
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>