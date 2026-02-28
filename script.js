function searchPayslip() {

    var contract = document.getElementById("contract").value.trim();
    var month = document.getElementById("month").value.trim();
    var year = document.getElementById("year").value.trim();
    var empId = document.getElementById("empId").value.trim();

    var loader = document.getElementById("loader");
    var result = document.getElementById("result");

    result.innerHTML = "";
    loader.style.display = "block";
    loader.innerHTML = "Searching, please wait...";

    if (!contract || !month || !year || !empId) {
        loader.style.display = "none";
        result.innerHTML = "<div class='error'>Please fill all fields</div>";
        return;
    }

    var fileURL = `https://raw.githubusercontent.com/sjpavin15/Salary-slip-system/main/${contract}/${year}/${month}/${empId}.pdf`;

    console.log("Generated URL:", fileURL);

    setTimeout(function () {

        fetch(fileURL, { method: 'HEAD' })
            .then(function (response) {

                loader.style.display = "none";

                if (response.ok) {
                    result.innerHTML =
                        "<div class='success'>" +
                        "<b>Payslip Found</b><br><br>" +
                        "<a href='" + fileURL + "' target='_blank'>View Payslip</a><br>" +
                        "<a href='" + fileURL + "' download>Download Payslip</a>" +
                        "</div>";
                } else {
                    result.innerHTML =
                        "<div class='error'>Payslip not available for selected Month & Year</div>";
                }
            })
            .catch(function () {

                loader.style.display = "none";
                result.innerHTML =
                    "<div class='error'>Payslip not available for selected Month & Year</div>";
            });

    }, 1200);
}