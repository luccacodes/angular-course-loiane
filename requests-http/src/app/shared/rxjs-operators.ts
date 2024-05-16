import { HttpEvent, HttpEventType, HttpResponse } from "@angular/common/http";
import { filter, map, pipe } from "rxjs";

export function filterResponse<T>() {
    return pipe(
      filter((event: HttpEvent<T>) => event.type === HttpEventType.Response),
      map((res: any) => res.body)
    )
}

export function uploadProgress<T>(cb: (progress: number) => void) {
    return pipe(
      map((event: HttpEvent<T>) => {
        if (event.type === HttpEventType.UploadProgress) {
          cb(Math.round((event.loaded * 100) / event.total!));
        }
        return event;
      })
    )
}