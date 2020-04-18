//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "fLFdH06.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = false;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "Multimod";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "y2mate.com - Drive Through the Aesthetic_17eRwiwxh5k_720p.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"Multimod.gif",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = false;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "y2mate.com - Whitewoods - Beach Walk_oF9yHO-UUws.ogg", name: "Whitewoods - Beach Walk"},
	{ogg: "y2mate.com - Home - Resonance (Slower Version) [HemTube Vine]_iRnrOxSD1Fw.ogg", name: "Home - Resonance Slower Version"},
	{ogg: "y2mate.com - 90sFlav - Call me_VLtSCBSaCIQ.ogg", name: "90sFlav - Call Me"},
	{ogg: "y2mate.com - Paradise (Original Mix)_QbVQGE_evC0.ogg", name: "Paradise Original Mix"},
	{ogg: "y2mate.com - Emil Rottmayer - MEGA_VLbMXG8lvjI.ogg", name: "Emil Rottmayer - MEGA"},
	{youtube: "", name: ""},
	{youtube: "", name: ""},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 10;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Filipinas es el único país del mundo donde es ilegal divorciarse.",
	"Milestii Mici es la bodega de vino más grande del mundo con una longitud de unos 200 kilómetros.",
	"El primer partido de básquetbol de la historia, se jugó con un balón de fútbol",
	"Con 2.302 puentes, Hamburgo es la ciudad con más puentes del mundo.",
	"¿Sabías que el fuego no tiene sombra?",
	"¿Sabías que en Japón las personas son contratadas para empujar a los pasajeros del metro?",
	"La mantis religiosa es el único insecto que sólo tiene un oído y no está en la cabeza sino en el tórax",
	"Los ojos hacen más ejercicio que las piernas",
	"Nuestro aroma es tan único como nuestras huellas digitales, no te sientas mal si hueles a sobaco",
	"El corazón podría mover un coche",
	"El calor corporal es más de lo que imaginas",
	"Los hombres y mujeres escuchan de manera diferente",
	"Los bebés pueden curar a sus madres en el vientre",
	"Hitler jamás subió a la Torre Eiffel por flojera",
	"Whatsapp solo cuenta con 55 trabajadores dentro de su equipo",
	"Los nazis quemaron todos los libros de Sigmund Freud.",
	"En 1959, una bibliotecaria de Carolina del Sur llamó a la Policía porque un niño negro de 9 años no quería marcharse",
	"Angelina Jolie intentó contratar a un sicario para que le matase cuando era joven",
	"Tu boca produce una botella de saliva todos los días.",
	"Al quitarlos de tu cuerpo, tu estómago e intestinos son lo suficientemente largos como para bajar desde el tercer piso de un edificio.",
	"Un ser humano adulto tiene aproximadamente 7,000,000,000,000,000,000,000,000,000 de átomos.",
	"Hemos tenido tres reyes menores de 10 años: Carlos II, Isabel II y Alfonso XIII.",
	"Las momias mas antiguas del mundo se encuentran en Chile.",
	"El primer Presidente de Chile fue argentino",
	"El programa de televisión más longevo del mundo es chileno, es Sabado Gigante.",
	"La primera tarjeta roja en un partido de fútbol fue para un chileno",
	"En Chile se realizó el partido de fútbol más largo del mundo",
	"Actualmente más personas en el mundo sufren de obesidad que de hambre.",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};