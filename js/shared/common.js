const megaManNameCreator = () => {
    const abilities = [
        'Fire',
        'Ice',
        'Wind',
        'Metal',
        'Blade',
        'Storm',
        'Thunder',
        'Blast',
        'Kinetic',
        'Snow'
    ];

    const randomIndex = Math.floor(Math.random() * (abilities.length));

    return abilities[randomIndex] + ' Man';
}

module.exports = {
    megaManNameCreator
};