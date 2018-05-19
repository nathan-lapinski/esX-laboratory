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

const asyncMegaManNameCreator = () => {
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

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(abilities[randomIndex] + ' Man');
        }, 500)
    });
}

module.exports = {
    megaManNameCreator,
    asyncMegaManNameCreator
};