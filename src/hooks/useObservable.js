import { useEffect, useState } from "react";
import { store$ } from "../store/store";
import { initState } from "../store/initState";

const useObservable = () => {
  const [state, setState] = useState(initState);

  useEffect(() => {
    const subscription$ = store$.subscribe((val) => setState(val));
    return () => {
      subscription$.unsubscribe();
    };
  }, [setState]);

  return state;
};

export default useObservable;
