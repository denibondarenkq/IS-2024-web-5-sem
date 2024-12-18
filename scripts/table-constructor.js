document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('tableForm');
    const tableContainer = document.getElementById('tableContainer');

    const saveParameters = (data) => {
        localStorage.setItem('tableParameters', JSON.stringify(data));
    };

    const loadParameters = () => {
        const data = localStorage.getItem('tableParameters');
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };

    const generateTable = (virtualWorlds, avatars, interaction, savedData = null) => {
        const worldNames = Array.from({ length: virtualWorlds }, (_, i) => `Виртуальный мир ${i + 1}`);

        const table = document.createElement('table');
        table.classList.add('generated-table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const featureHeader = document.createElement('th');
        featureHeader.textContent = 'Особенности';
        headerRow.appendChild(featureHeader);

        worldNames.forEach(world => {
            const th = document.createElement('th');
            th.textContent = world;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        const features = [
            'Количество аватаров',
            'Способ взаимодействия',
            'Интерактивные голограммы',
            'Автоматическое самообновление',
            'Телекинез интерфейсов'
        ];

        const tableData = savedData || {};

        features.forEach(feature => {
            const row = document.createElement('tr');

            const featureCell = document.createElement('td');
            featureCell.textContent = feature;
            row.appendChild(featureCell);

            worldNames.forEach((_, colIndex) => {
                const cell = document.createElement('td');

                if (savedData) {
                    cell.textContent = tableData[feature]?.[colIndex] || '';
                } else {
                    let value = '';
                    if (feature === 'Количество аватаров') {
                        value = avatars;
                    } else if (feature === 'Способ взаимодействия') {
                        value = interaction.charAt(0).toUpperCase() + interaction.slice(1);
                    } else if (feature === 'Интерактивные голограммы') {
                        value = Math.random() > 0.5 ? 'Да' : 'Нет';
                    } else if (feature === 'Автоматическое самообновление') {
                        value = 'Включено';
                    } else if (feature === 'Телекинез интерфейсов') {
                        value = Math.random() > 0.5 ? 'Активно' : 'Неактивно';
                    }

                    cell.textContent = value;

                    if (!tableData[feature]) {
                        tableData[feature] = [];
                    }
                    tableData[feature][colIndex] = value;
                }

                row.appendChild(cell);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);

        return { table, tableData };
    };

    const displayTable = (table) => {
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const virtualWorlds = formData.get('virtualWorlds');
        const avatars = formData.get('avatars');
        const interaction = formData.get('interaction');

        const { table, tableData } = generateTable(virtualWorlds, avatars, interaction);

        displayTable(table);

        saveParameters({
            virtualWorlds,
            avatars,
            interaction,
            tableData
        });
    });

    const savedParameters = loadParameters();
    if (savedParameters) {
        form.virtualWorlds.value = savedParameters.virtualWorlds;
        form.avatars.value = savedParameters.avatars;
        form.interaction.value = savedParameters.interaction;

        const { table } = generateTable(
            savedParameters.virtualWorlds,
            savedParameters.avatars,
            savedParameters.interaction,
            savedParameters.tableData
        );

        displayTable(table);
    }
});