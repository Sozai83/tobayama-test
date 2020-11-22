function formCheck(id){
	this.id = id
	if(document.getElementById(id).value == ""){
		document.getElementById(id).style.borderColor = "red";
		document.getElementById(id+'Warning').innerHTML="必須事項です。必ずご入力ください。";
	}else{
		document.getElementById(id).style.borderColor = "#CCCCCC";
		document.getElementById(id+'Warning').innerHTML="";
	}
}


function mailCheck(id) {
	this.id = id;
    var mail_regex1 = new RegExp( '(?:[-!#-\'*+/-9=?A-Z^-~]+\.?(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*|"(?:[!#-\[\]-~]|\\\\[\x09 -~])*")@[-!#-\'*+/-9=?A-Z^-~]+(?:\.[-!#-\'*+/-9=?A-Z^-~]+)*' );
    var mail_regex2 = new RegExp( '^[^\@]+\@[^\@]+$' );
    if( id.match( mail_regex1 ) && mail.match( mail_regex2 ) ) {
        // 全角チェック
        if( id.match( /[^a-zA-Z0-9\!\"\#\$\%\&\'\(\)\=\~\|\-\^\\\@\[\;\:\]\,\.\/\\\<\>\?\_\`\{\+\*\} ]/ ) ) { return false; }
        // 末尾TLDチェック（〜.co,jpなどの末尾ミスチェック用）
        if( !id.match( /\.[a-z]+$/ ) ) { return false; }
        return true;
    } else {
        return false;
    }
    if(false){
    	document.getElementById('emailWarning').innerHTML="有効なメールアドレスを使用してください"
    }
}