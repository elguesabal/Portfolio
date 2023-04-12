function TelaLoad() {

    setTimeout( function() {
        document.getElementById('telaLoad').style.display = 'none'
    }, 2000)

    return (
        <div id="telaLoad">
            <div class="load">
                <div className="load1"></div>
                <div class="load2"></div>
            </div>
        </div>
    )
}

export default TelaLoad