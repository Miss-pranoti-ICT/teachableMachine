
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach(camera);

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

  console.log('ml5 version:', ml5.version);
  //Loaded model
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
    //END 
    
  



    // This function is called when identify image button is clicked
  function check()
  {
    //storing the captured image in variable img
    img = document.getElementById('captured_image');
    //classify is a function inside the image classifier used to run the trained model
    //we are passing img and calling gotResult function
    //Run the model
    classifier.classify(img,  gotResult);
  }

  //Called inside the check()
function gotResult(error, results) {
  //If there is error it will display error in the cosole
  if (error) {
    console.error(error);
  } 
  else {
    //Displays the result in console
    console.log(results);
    //in the result_object_name we will show results, inside the results the answer will always be at position 0 position
  // 0 position showing label in element
    document.getElementById("result_object_name").innerHTML = results[0].label;
  // 0 position showing confidence in element and showing only 3 decimal values
    document.getElementById(" ").innerHTML = results[0].confidence.toFixed(3);
  }
}
