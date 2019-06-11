# boston-schools-race-ethnicities

## How data was prepared
The data can come from a spreadsheet of any kind, whether it’s Excel or Google (or any other kind, though those are the only I know of). The three columns should be named Question, Name and Value. Note: As of now, it only charts POSITIVE numbers. Notice there are no dollar signs or percentages. Just raw numbers. There should be no commas in the numbers. 

Data is converted to JSON using Mr. Data Converter: https://shancarter.github.io/mr-data-converter/

## How the code works

This graphic allows readers and users to see how demographics have changed over years at Boston schools.

The code builds the dropdown menu by looping through a for array.

There's a function that generates a bar chart using d3 and JavaScript, showing a school's data for 2017-18 and 1997-1998 in a div. Each time the dropdown changes state — a new selection is made, etc. — the divs for 2017-18 and 1997-1998 are cleared, a new label for the school name is generated, and the divs for 2017-18 and 1997-1998 are filled with bar charts for that school.

The two data arrays — data2017 and data1997 — did not have the same school names, because the data came from different sources. If I had the code compare the arrays looking for the same name, they would have not matched all of them, because some schools merged, and others changed names. So to compare them, I had the code compare them based on multi-digit codes.
