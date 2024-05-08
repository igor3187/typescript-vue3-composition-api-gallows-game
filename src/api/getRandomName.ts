export const getRandomName = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    return data.results[0].name.first.toLowerCase();
}