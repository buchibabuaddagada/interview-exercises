<?php

class Guest {

	protected $dbhost 	= "localhost";
	protected $dbuser 	= "username";
	protected $dbpass 	= "password";
	protected $dbname 	= "myDB";

	function __construct( $db ) {

        if (isset($db['servername'])) {
    		$this->dbhost 	= $db['servername'];
        }
        if (isset($db['username'])) {
    		$this->dbhost 	= $db['username'];
        }
        if (isset($db['password'])) {
    		$this->dbhost 	= $db['password'];
        }
        if (isset($db['dbname'])) {
    		$this->dbhost 	= $db['dbname'];
        }
    	
	}

	public function addGuest( $data ) {

		// Create MySQL Connection
		$conn = mysql_connect($this->dbhost, $this->dbuser, $this->dbpass);
   
		if(!$conn) {
			die('Could not connect: ' . mysql_error());
		}

		$sql = 'INSERT INTO guest '.
		        '(guest_name,guest_address, guest_phone, guest_email, date_created) '.
		        'VALUES ( '. $guest['name'].', '.$guest['address'].', '.$guest['phone'].', '.$guest['email'].', NOW() )';

		mysql_select_db($this->dbname);
   		$returnVal = mysql_query( $sql, $conn );

   		// If error
		if(! $returnVal ) {
			die('Could not enter data: ' . mysql_error());
		}
	
		// Close connection
		mysql_close($conn);
		
		return true;
	
	}

	public function addGuests() {

		if(isset($_REQUEST['guestArray']))
		
		foreach($_REQUEST['guestArray'] as $guest) {
		    addGuest($guest);
		}
	}
}
?>

