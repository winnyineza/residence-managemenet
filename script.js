document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.getElementById('theme-switcher');
    const maintenanceForm = document.getElementById('maintenance-form');
    const updateStatusForm = document.getElementById('update-status-form');
    const requestTableBody = document.getElementById('request-table-body');
    const historyTableBody = document.getElementById('history-table-body');

    themeSwitcher.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    maintenanceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(maintenanceForm);
        const requestId = `REQ${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`;
        const room = formData.get('room');
        const description = formData.get('description');
        const priority = formData.get('priority');
        const timing = formData.get('timing');
        const date = new Date().toISOString().split('T')[0];

        console.log("New request submitted");
        console.log(`ID: ${requestId}, Room: ${room}, Description: ${description}, Priority: ${priority}, Timing: ${timing}, Date: ${date}`);

        const newRequest = `
            <tr class="border-t">
                <td class="py-2 px-4">${requestId}</td>
                <td class="py-2 px-4">${room}</td>
                <td class="py-2 px-4">Pending</td>
                <td class="py-2 px-4">${description}</td>
                <td class="py-2 px-4">${date}</td>
            </tr>
        `;

        requestTableBody.innerHTML += newRequest;
        historyTableBody.innerHTML += newRequest;
        maintenanceForm.reset();
    });

    updateStatusForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(updateStatusForm);
        const requestId = formData.get('update-request-id');
        const status = formData.get('update-status');
        const notes = formData.get('update-notes');

        console.log("Status update submitted");
        console.log(`ID: ${requestId}, Status: ${status}, Notes: ${notes}`);

        const rows = requestTableBody.querySelectorAll('tr');
        rows.forEach(row => {
            if (row.children[0].textContent === requestId) {
                row.children[2].textContent = status;
            }
        });

        const newHistory = `
            <tr class="border-t">
                <td class="py-2 px-4">${requestId}</td>
                <td class="py-2 px-4">${formData.get('room')}</td>
                <td class="py-2 px-4">${status}</td>
                <td class="py-2 px-4">${formData.get('description')}</td>
                <td class="py-2 px-4">${new Date().toISOString().split('T')[0]}</td>
                <td class="py-2 px-4">${notes}</td>
            </tr>
        `;

        historyTableBody.innerHTML += newHistory;
        updateStatusForm.reset();
    });
});
