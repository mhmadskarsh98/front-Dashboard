var myApp = new function () {
    this.printTable = function () {
        var tab = document.getElementById('tab');
        var style = "<style>";
            style = style + "html{direction: rtl;}";
            style = style + "th:nth-child(2){display:none;}";
            style = style + "th:nth-child(7){display:none;}";
            style = style + "th:nth-child(5){display:none;}";
            style = style + "td:nth-child(5){display:none;}";
            style = style + "td:nth-child(2){display:none;}";            
            style = style + "td:nth-child(7){display:none;}";
            style = style + "table {width: 100%;font: 17px Calibri;}";
            style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
            style = style + "padding: 2px 3px;text-align: center;}";
            style = style + "</style>";

        var win = window.open('', '', 'height=700,width=700');
        win.document.write(style);          //  add the style.
        win.document.write(tab.outerHTML);
        win.document.close();
        win.print();
    }
}