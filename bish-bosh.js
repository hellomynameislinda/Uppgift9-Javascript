const form = document.getElementById("bbform");
form.addEventListener("submit", function (event) {
    event.preventDefault(); // To make sure we don't submit

    const output = document.getElementById("output");

    const fromNum = 1;
    const toNum = form.elements["toNum"].value;
    const bishNum = form.elements["bishNum"].value;
    const boshNum = form.elements["boshNum"].value;
    let outputString = "";

    for (let index = fromNum; index <= toNum; index++) {
        if ((index % bishNum == 0) && (index % boshNum == 0))
            outputString += 'Bish-Bosh';
        else if (index % bishNum == 0)
            outputString += 'Bish';
        else if (index % boshNum == 0)
            outputString += 'Bosh';
        else
            outputString += index;

        if (index < toNum)
            outputString += ', '
    }
    output.textContent = outputString;
});