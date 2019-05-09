import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIyZDA2ODk3ZS0wZDQxLTRiYjktYjEwNC0zYmNiYTNlMjMyZjkiLCJ1bmlxdWVfbmFtZSI6IkFkbWluaXN0cmFkb3IiLCJyb2xlIjoiQWRtaW5pc3RyYWRvciIsInNpZCI6ImlxQnJJUTgwUDBPMHlXMkVtYjQ3VFEiLCJpc3QiOjE1LCJpc3RtZyI6MzAsInB3Y3IiOmZhbHNlLCJjbW5hbWUiOiJCb25hbnphIiwiZm5hbWUiOiJMdWlzIE9yb3pjbyIsIm5iZiI6MTU1NzM4NTA2OSwiZXhwIjoxNTU3NDcxNDY5LCJpYXQiOjE1NTczODUwNjksImlzcyI6Imh0dHBzOi8vZGV2LmNvcmVzeXN0ZW1zLmlvOjkxMDEvYXBpLyIsImF1ZCI6Imh0dHBzOi8vZGV2LmNvcmVzeXN0ZW1zLmlvOjMyMjgifQ.fr8kMP6txTG59c6Lp9TTu3D5xcy_i-DVahgK6sRuvPQ";
        // if (token) {
        //     request = request.clone({
        //         setHeaders: {
        //             "Authorization": 'Bearer ' + token,
        //             "content-type": "application/json",
        //         }
        //     });
        // }
        request = request.clone({
            setHeaders: {
                "content-type": "application/json",
            }
        });
        return next.handle(request);
    }
}