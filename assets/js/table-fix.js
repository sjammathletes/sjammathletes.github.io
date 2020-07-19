function tableFix() {
    var table = document.getElementById("student-achievements");
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            var numspan = 0;
            for (var k = i+1, cell; cell = table.rows[k]; k++) {
                cell = cell.cells[j];
                if (cell.textContent.includes('^^')) {
                    numspan++;
                    cell.style.display = "none";
                } else {
                    break;
                }
            }
            if (numspan > 0) {
                col.rowSpan = numspan+1;
            }
        }  
    }
}

document.body.onload = tableFix;