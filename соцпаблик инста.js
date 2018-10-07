 //////////////////////////////////////////////////////////////////////////////////////////////////ссылка 1
 window.open 
 content.document.location.href = "         https://www.instagram.com/***********/             ";
 //////////////////////////////////////////////////////////////////////////////////////////////////ссылка 1


function stateChange(newState) {
    setTimeout(function () {
        if (newState == -1) {
            alert('VIDEO HAS STOPPED');
        }
    }, 7000);
}

var settings = (`
	SET !REPLAYSPEED FAST
	SET !TIMEOUT 360
	SET !TIMEOUT_STEP 1
	SET !EXTRACT_TEST_POPUP NO
	SET !ERRORIGNORE YES
	`)
iimPlayCode(`
	${settings}
TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписки
EVENT TYPE=CLICK SELECTOR="HTML>BODY>DIV:nth-of-type(3)>DIV>DIV>DIV>DIV:nth-of-type(3)>BUTTON" BUTTON=0
TAG POS=1 TYPE=BUTTON ATTR=TXT:Подписаться
TAB CLOSE

	`);






