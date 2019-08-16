(() => {
    const url = 'https://chouseisan.com';
    if (location.origin != url) {
        location.href = url;
        return;
    }
    let time_text = prompt("デフォルト開始時間を設定します", "19:30～");
    $("#datepicker").datepicker( 'option', 'onSelect', function (dateText, inst) {
        var nowText = $("#kouho").val();
        if (nowText !== "") {
            nowText += "\n";
        }
        $("#kouho").val(nowText + dateText + ' ' + time_text);
    });
})();
