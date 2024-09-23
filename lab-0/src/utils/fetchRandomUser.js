export const fetchRandomUser = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/?nat=ru');
        const data = await response.json();
        const user = data.results[0];

        const timestamp = new Date().getTime();
        const avatarUrl = `https://loremflickr.com/800/800/man?cacheBust=${timestamp}`;

        return {
            firstName: user.name.first,
            lastName: user.name.last,
            picture: avatarUrl,
        };
    } catch (error) {
        console.error('Error fetching random user:', error);
        return {
            firstName: 'Unknown',
            lastName: 'User',
            picture: '',
        };
    }
};