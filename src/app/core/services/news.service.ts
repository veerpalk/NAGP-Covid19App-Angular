import { Injectable } from '@angular/core';
import { INews } from 'src/app/common/interfaces/INews';

@Injectable({
    providedIn: 'root'
})

export class NewsService {

    private imagesName: string[] = ['news1.jpg', 'news2.jpg', 'news3.jpg', 'news4.jpg', 'news5.jpg', 'news6.jpg']

    /** Array of covid news data. */
    private covidNews: INews[] = [
        {
            "id": 1,
            "title": "Coronavirus death toll has passed 20,000 after hundreds of new deaths overnight",
            "description": "The UK’s coronavirus death toll has passed 20,000 after a further 781 fatalities were recorded in the past 24 hours...",
            "summary": `3,206 calls to 111 and 385 calls to the Coronavirus Helpline. The number of calls to 111 includes all calls, whether or not they relate to COVID-19
    1,507 Scottish Ambulance Service (SAS) attendances, of which 338 were for suspected COVID-19. SAS took 214 people to hospital with suspected COVID-19.
    600 people delayed in hospital. This is 1,012 less than the baseline period (04/03 weekly return). An initial target to reduce delays by 400 by the
     end of March and a further target of reducing by a further 500 by the end of April have now been met",`,
            "createdDate": new Date("04-25-2020"),
            "image": "https://cnet2.cbsistatic.com/img/8hXjc8jZY4LiEPWOmtFypUYhrW8=/980x551/2020/03/20/3cda9836-690d-4199-bd05-f2d444cc7db5/barcelona.jpg",
            "date":"24",
            "month":"Apr 2020"
        },
        {
            "id": 2,
            "title": "A far-reaching pandemic",
            "description": "A never-before-seen virus first detected in the Chinese city of Wuhan has infected people around the world with a pneumonia-like illness.",
            "summary": `In a scene that's become all too familiar around the world, a man in Barcelona crosses an empty street on March 20 wearing a face mask as a precaution against the spread of COVID-19, the illness 
  caused by the virus. Residents of the city are facing confinement and being asked to practice social distancing`,
            "createdDate": new Date("04-24-2020"),
            "image": "assets/images/news/news1.jpg",
            "date":"24",
            "month":"Apr 2020"
        },

        {
            "id": 3,
            "title": "Coronavirus death toll has passed 20,000 after hundreds of new deaths overnight",
            "description": "The UK’s coronavirus death toll has passed 20,000 after a further 781 fatalities were recorded in the past 24 hours...",
            "summary": `3,206 calls to 111 and 385 calls to the Coronavirus Helpline. The number of calls to 111 includes all calls, whether or not they relate to COVID-19
    1,507 Scottish Ambulance Service (SAS) attendances, of which 338 were for suspected COVID-19. SAS took 214 people to hospital with suspected COVID-19.
    600 people delayed in hospital. This is 1,012 less than the baseline period (04/03 weekly return). An initial target to reduce delays by 400 by the
     end of March and a further target of reducing by a further 500 by the end of April have now been met",`,
            "createdDate": new Date("04-25-2020"),
            "image": "assets/images/news/news5.jpg",
            "date":"25",
            "month":"Apr 2020"
        },
        {
            "id": 4,
            "title": "A far-reaching pandemic",
            "description": "A never-before-seen virus first detected in the Chinese city of Wuhan has infected people around the world with a pneumonia-like illness.",
            "summary": `In a scene that's become all too familiar around the world, a man in Barcelona crosses an empty street on March 20 wearing a face mask as a precaution against the spread of COVID-19, the illness 
  caused by the virus. Residents of the city are facing confinement and being asked to practice social distancing`,
            "createdDate": new Date("04-24-2020"),
            "image": "assets/images/news/news2.jpg",
            "date":"24",
            "month":"Apr 2020"
        },
        {
            "id": 5,
            "title": "Coronavirus death toll has passed 20,000 after hundreds of new deaths overnight",
            "description": "The UK’s coronavirus death toll has passed 20,000 after a further 781 fatalities were recorded in the past 24 hours...",
            "summary": `3,206 calls to 111 and 385 calls to the Coronavirus Helpline. The number of calls to 111 includes all calls, whether or not they relate to COVID-19
    1,507 Scottish Ambulance Service (SAS) attendances, of which 338 were for suspected COVID-19. SAS took 214 people to hospital with suspected COVID-19.
    600 people delayed in hospital. This is 1,012 less than the baseline period (04/03 weekly return). An initial target to reduce delays by 400 by the
     end of March and a further target of reducing by a further 500 by the end of April have now been met",`,
            "createdDate": new Date("04-25-2020"),
            "image": "assets/images/news/news4.jpg",
            "date":"25",
            "month":"Apr 2020"
        },
        {
            "id": 6,
            "title": "A far-reaching pandemic",
            "description": "A never-before-seen virus first detected in the Chinese city of Wuhan has infected people around the world with a pneumonia-like illness.",
            "summary": `In a scene that's become all too familiar around the world, a man in Barcelona crosses an empty street on March 20 wearing a face mask as a precaution against the spread of COVID-19, the illness 
  caused by the virus. Residents of the city are facing confinement and being asked to practice social distancing`,
            "createdDate": new Date("04-24-2020"),
            "image": "assets/images/news/news3.jpg",
            "date":"24",
            "month":"Apr 2020"
        },
    ];

    constructor() {

    }

    ngOnInit() {

    }
    /** Method to get all login user data. */
    getAllNews(): INews[] {
        return this.covidNews;
    }

    public getNewsById(id: number): INews {
        let foundNews: INews = this.covidNews.find(news => news.id == id)
        return foundNews;
    }

    public deleteNewsById(id: number): void {
        let index: number = this.covidNews.findIndex(news => news.id == id);
        if (index != -1) {
            this.covidNews.splice(index, 1)
        }
    }

    public updateNews(news: INews): void {
        let foundNews: INews = this.covidNews.find(x => x.id === news.id);
        foundNews.title = news.title;
        foundNews.description = news.description;
        foundNews.summary = news.summary;
        foundNews.createdDate = new Date(Date.now());
        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
       
        let d = foundNews.createdDate.getDate();
        let m = foundNews.createdDate.getMonth();
        let mo = months[m] + " " + foundNews.createdDate.getFullYear();
        foundNews.date=d.toString();
        foundNews.month=mo.toString();
    }

    public addNews(news: INews): INews[] {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var mo = months[m] + " " + date.getFullYear();
        news.id = this.genId();
        news.createdDate = new Date(Date.now());
        news.date=d.toString();
        news.month=mo.toString();
        news.image = this.getImagePath();
        this.covidNews.push(news);
        return this.covidNews;
    }

    /** Method that generates the ids of user when not passed. */
    genId(): number {
        return this.covidNews.length > 0 ? Math.max(...this.covidNews.map(news => news.id)) + 1 : 1;
    }

    public deleteAllNews() {
        this.covidNews = [];
        return this.covidNews;
    }

    private getImagePath(): string {

        var imageIndex = Math.floor(Math.random() * (6) + 0);
        var imageName: string = this.imagesName[imageIndex];

        var imagePath: string = "assets/images/news/" + imageName;
        return imagePath;
    }
}
