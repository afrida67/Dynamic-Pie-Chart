<?php
   
   $myFile = "data.json";
   $arr_data = array(); // create empty array
   
   echo "print hoitse ki";

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

	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
		//<a href="chart.html">Visit W3Schools.com!</a>
		 header('Location: '.$_SERVER['HTTP_REFERER']); exit;
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>