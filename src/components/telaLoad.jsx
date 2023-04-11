function TelaLoad() {

    setTimeout( function() {
        document.getElementById('telaLoad').style.display = 'none'
    }, 2000)

    return (
        <div id="telaLoad">
            <div class="load">
                <ion-icon class="load1" name="logo-javascript"></ion-icon>
                <div class="load2"></div>
            </div>
        </div>
    )
}

export default TelaLoad