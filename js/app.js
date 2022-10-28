function buildTable (data) {
    // First, clear out any existing data.
    tbody.html("");

    // Next, loop thru each object in the data.
    // and append a row and cells for each value in the row.
    
    // chains a for loop to our data. loop thru each obj in the array.
    data.forEach((dataRow) => {
    // Append a row to the table body.
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value to a  table cell (td).
    Object.values(dataRow).forEach((val) => {
        // append a row to the HTML table.
        let cell = row.append("td");
        // this variable holds only each value (the text) from the object.
        cell.text(val);
    }
    );
});
}
