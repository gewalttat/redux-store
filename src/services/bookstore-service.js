export default class BookStoreService {
    data = [
        {
            id: 1,
            title: 'Warcraft: Chronicle. Encyclopedia pt. 3',
            author: 'Christopher Vincent Metzen',
            price: 270,
            coverImage: "https://cdn1.ozone.ru/s3/multimedia-p/c360/6008219401.jpg"
        },

        {
            id: 2,
            title: 'Chronicle Volume 1',
            author: 'Christopher Vincent Metzen',
            price: 250,
            coverImage: "https://cdn1.ozone.ru/s3/multimedia-i/c360/6008220294.jpg"
        }
    ]

    //возвращает промис в виде даты с задержкой 700 мс
    //режект пока не реализован
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('sasai'));
                } else { 
                    resolve(this.data) 
                }
            }, 700);
        });
    };
};