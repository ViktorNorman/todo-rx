import { Subject, distinctUntilChanged, shareReplay } from "rxjs";
import { startWith, scan } from "rxjs/operators";
import { initState } from "./initState";
import { rootReducer } from "./rootReducer";

const action$ = new Subject();

export const store$ = action$.pipe(
  startWith(initState),
  scan(rootReducer),
  distinctUntilChanged(),
  shareReplay(1)
);

export const dispatch =
  (func) =>
  (...args) =>
    action$.next(func(...args));

export const dispatchAsync =
  (func) =>
  async (...args) => {
    const response = await fetch(...args);
    const parsedResponse = await response.json();
    if (parsedResponse) {
      action$.next(func(parsedResponse));
    }
  };

export const dispatchStorage =
  (func) =>
  async (...args) => {
    const storageItem = await localStorage.getItem(...args.toString());

    if (storageItem) {
      action$.next(func(storageItem));
    }
  };
