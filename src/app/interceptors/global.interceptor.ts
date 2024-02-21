import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class GlobalInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const baseUrl: string = 'https://upskilling-egypt.com:443/api/v1/';
  let newHeaders={}
  if(token!==null)
  {
    newHeaders={'Authorization':'Bearer' + token}
  }
 let newRequest=request.clone({
    setHeaders:newHeaders, url:baseUrl + request.url
  })
  return next.handle(newRequest);
};
}
