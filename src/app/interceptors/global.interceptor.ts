import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export class GlobalInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('userToken');
    const baseUrl: string = 'https://upskilling-egypt.com:443/api/v1/';
    let x = request.clone({
      url: baseUrl + request.url,
      setHeaders:{
        'Authorization':`Bearer ${token}`
      }
    })
    return next.handle(x);
};
}
