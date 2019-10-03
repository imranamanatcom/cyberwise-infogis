<?php

/*
<!--
........................................................................................
........................................................................................
........................................................................................

HHHHHHHHH     HHHHHHHHH                                     kkkkkkkk           
H:::::::H     H:::::::H                                     k::::::k           
H:::::::H     H:::::::H                                     k::::::k           
HH::::::H     H::::::HH                                     k::::::k           
  H:::::H     H:::::H    aaaaaaaaaaaaa      cccccccccccccccc k:::::k    kkkkkkk
  H:::::H     H:::::H    a::::::::::::a   cc:::::::::::::::c k:::::k   k:::::k 
  H::::::HHHHH::::::H    aaaaaaaaa:::::a c:::::::::::::::::c k:::::k  k:::::k  
  H:::::::::::::::::H             a::::ac:::::::cccccc:::::c k:::::k k:::::k   
  H:::::::::::::::::H      aaaaaaa:::::ac::::::c     ccccccc k::::::k:::::k    
  H::::::HHHHH::::::H    aa::::::::::::ac:::::c              k:::::::::::k     
  H:::::H     H:::::H   a::::aaaa::::::ac:::::c              k:::::::::::k     
  H:::::H     H:::::H  a::::a    a:::::ac::::::c     ccccccc k::::::k:::::k    
HH::::::H     H::::::HHa::::a    a:::::ac:::::::cccccc:::::ck::::::k k:::::k   
H:::::::H     H:::::::Ha:::::aaaa::::::a c:::::::::::::::::ck::::::k  k:::::k  
H:::::::H     H:::::::H a::::::::::aa:::a cc:::::::::::::::ck::::::k   k:::::k 
HHHHHHHHH     HHHHHHHHH  aaaaaaaaaa  aaaa   cccccccccccccccckkkkkkkk    kkkkkkk

........................................................................................
........ N: IMRAN MALIK, Y: 2015 W: www.imranmalik.net C: Infogistic  ..................
........................................................................................
*/




//Functions

/**************************************  CyberWise Make Secure Text  **********************************************
********************************************************************************************************************/
function stripHtmlTags( $text )
{
    $text = preg_replace(
    array(
            // Remove invisible content
           '@<head[^>]*?>.*?</head>@siu',
           '@<style[^>]*?>.*?</style>@siu',
           '@<script[^>]*?.*?</script>@siu',
           '@<object[^>]*?.*?</object>@siu',
           '@<embed[^>]*?.*?</embed>@siu',
           '@<applet[^>]*?.*?</applet>@siu',
           '@<noframes[^>]*?.*?</noframes>@siu',
           '@<noscript[^>]*?.*?</noscript>@siu',
           '@<noembed[^>]*?.*?</noembed>@siu',
            // Add line breaks before and after blocks
           '@</?((address)|(blockquote)|(center)|(del))@iu',
           '@</?((div)|(h[1-9])|(ins)|(isindex)|(p)|(pre))@iu',
           '@</?((dir)|(dl)|(dt)|(dd)|(li)|(menu)|(ol)|(ul))@iu',
           '@</?((table)|(th)|(td)|(caption))@iu',
           '@</?((form)|(button)|(fieldset)|(legend)|(input))@iu',
           '@</?((label)|(select)|(optgroup)|(option)|(textarea))@iu',
           '@</?((frameset)|(frame)|(iframe))@iu',
    ), array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',"\n\$0", "\n\$0", "\n\$0", "\n\$0", "\n\$0", "\n\$0","\n\$0", "\n\$0",),$text );

   return strip_tags( $text );
}
	
function cyberWiseMakeSafeRequest($variable) {
    $variable = stripHtmlTags($variable);
    $bad = array("=","<", ">", "/","\"","`","~","'","$","%","#");
    $variable = str_replace($bad, "", $variable);
    //$variable = mysql_real_escape_string(trim($variable));
    return $variable;
}


//vars
$cyberWiseName = cyberWiseMakeSafeRequest($_POST['name']);
$cyberWiseContantNo = cyberWiseMakeSafeRequest($_POST['contantNo']);
$cyberWiseEmailID = cyberWiseMakeSafeRequest($_POST['emailID']);
$cyberWiseOrganizationName = cyberWiseMakeSafeRequest($_POST['organizationName']);
$cyberWiseAdditionalInformation = cyberWiseMakeSafeRequest($_POST['additionalInformation']);
$currentIp = $_SERVER['REMOTE_ADDR'];

// code 
$to = "info@cyberwise.co"; 
$subject = "CyberWise - ".$currentIp." - ".$cyberWiseName;
$message = "Name: ".$cyberWiseName."\r\n";
$message .= "Contant No: ".$cyberWiseContantNo."\r\n";
$message .= "E-mail ID: ".$cyberWiseEmailID."\r\n";
$message .= "Organization Name: ".$cyberWiseOrganizationName."\r\n";
$message .= "".$currentIp."\r\n \r\n";
$message .= "Additional Information: ".$cyberWiseAdditionalInformation;
        
$headers = 'From: no-reply@cyberwise.co' . "\r\n" .
    'Reply-To: '.$cyberWiseEmailID . "\r\n" .
    'X-Mailer: IMK/ IMK2015'.
    'Spam: F-c-h_zim';

mail($to,$subject,$message,$headers);
//$message;

exit;

?>