

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
      // public errorDialogService: ErrorDialogService
      private toastr: ToastrService
      ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error['name'] === "HttpErrorResponse"){
                  this.toastr.error("Please try another one", "Item not found")
                }
                return throwError(error);
            })
        );
    }
}
