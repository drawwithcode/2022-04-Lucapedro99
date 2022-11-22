let permissionGranted = false;
let cx,cy;


function setup() {
	createCanvas(windowWidth, windowHeight);

  cx = width/2;
  cy = height/2;
	
if(typeof(DeviceOrientationEvent) !== 'undefind' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {
	
	//ios 13 device 
	DeviceOrientationEvent.requestPermission()
	.catch(() => {
		// show permission button only first time 
		let button = createButton("click to allow access to sensors");
		button = createButton("click to allow to sensors");
	button.style("font-size","24px");
	button.center();
	button.mousePressed( requestAccess );
	throw error;
	})
	.then(() => {
		permissionGranted = true;
	})
 } else {
	//non ios 13 device
	textSize(48);
	text("non ios 13 device",100,100);
 }
}
function requestAccess(){
	DeviceOrientationEvent.requestPermission()
	.then(response =>{
		if (response = 'garanted') {
			permissionGaranted = true;
		} else {
			permissionGranted = false;
		}
	})
	.cartch(console.error);

	button.remove();
}

function draw() {
	// put drawing code here

	if (!permissionGranted) return;

	//background(255);

	// rotation X / Y 
    const dx = constrain(rotationX, -3, 3)
	const dy = constrain(rotationY, -3, 3)
	cx += dx*2;
	cy += dy*2;
	cx = constrain(cx, 0 , width);
	cy = constrain(cy, 0 , height);

	rect(cx,cy, 20, 20);

}
