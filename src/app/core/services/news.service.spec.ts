import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
    let service: NewsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
            ],
            providers: [
                NewsService
            ]
        });
        service = TestBed.inject(NewsService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('Given News Service, when called getAllNews expect it to return all news ', () => {
        var mockedNews = service.getAllNews();
        expect(mockedNews.length).toBeGreaterThan(0);
    })

    it('Given News Service, when called getAllNews by Id expect it to return that news ', () => {
        var mockedNewsId = 1;
        var mockedNew = service.getNewsById(1);
        expect(mockedNew).not.toBeNull();
    })

    it('Given News Service, when called deleteAllNews expect no news ', () => {
        service.deleteAllNews();
        expect(service.getAllNews.length).toBe(0);
    })
})
