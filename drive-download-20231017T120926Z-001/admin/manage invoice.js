
    document.getElementById("add-invoice-card").addEventListener("click", function() {
        document.getElementById("invoice-popup").style.display = "block";
    });

    document.getElementById("close-popup").addEventListener("click", function() {
        document.getElementById("invoice-popup").style.display = "none";
    });

    document.getElementById("add-invoice-button").addEventListener("click", function () {
        // Show the popup when the button is clicked
        document.getElementById("invoice-popup").style.display = "block";
    });
    document.getElementById("view-invoice-button").addEventListener("click", function () {
            // Show the invoice table when the button is clicked
            document.getElementById("invoice-table").style.display = "table";
        });
        document.getElementById("view-invoice-button").addEventListener("click", function () {
            // Show the invoice table when the button is clicked
            document.getElementById("invoice-table").style.display = "table";
        });
        const table = document.getElementById("invoice-table");
        const filterOptions = document.getElementById("filter-options");

        filterOptions.addEventListener("change", () => {
            const selectedValue = filterOptions.value;
            const rows = table.querySelectorAll("tbody tr");

            rows.forEach(row => {
                const dateColumn = row.querySelector("td:first-child");
                const dateString = dateColumn.textContent;

                if (selectedValue === "all" || isDateInRange(selectedValue, dateString)) {
                    row.style.display = "table-row";
                } else {
                    row.style.display = "none";
                }
            });
        });

        function isDateInRange(filter, dateString) {
            const today = new Date();
            const date = new Date(dateString);

            if (filter === "today") {
                return isSameDay(today, date);
            } else if (filter === "yesterday") {
                const yesterday = new Date(today);
                yesterday.setDate(today.getDate() - 1);
                return isSameDay(yesterday, date);
            } else if (filter === "current-week") {
                const startOfWeek = new Date(today);
                startOfWeek.setDate(today.getDate() - today.getDay());
                return date >= startOfWeek;
            } else if (filter === "current-month") {
                const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
                return date >= startOfMonth;
            }

            return false;
        }

        function isSameDay(date1, date2) {
            return (
                date1.getFullYear() === date2.getFullYear() &&
                date1.getMonth() === date2.getMonth() &&
                date1.getDate() === date2.getDate()
            );
        }