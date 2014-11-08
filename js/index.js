function fillChelseaGameWithText("http://peaceful-cove-7016.herokuapp.com/nextgame")
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
};
    